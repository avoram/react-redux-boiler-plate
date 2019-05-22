import axios from "axios";
import { toastr } from "react-redux-toastr";
import store from "../store/store";
import * as loaderConst from "../store/loader/loader.const";

import promise from "promise";
import { API_BASE_URL, ERROR_MESSAGE_TOASTER } from "./app.config";

var axiosInstance = axios.create();
let apiCallsCount = 0;

// Global axios defaults
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common["Authorization"] = "test token";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Add a request interceptor
axiosInstance.interceptors.request.use(
  // Do something before request is sent
  function(config) {
    apiCallsCount++;

    // disptach the action to show loader when api call triggers
    store.dispatch({ type: loaderConst.SHOW_LOADER });
    return config;
  },
  function(error) {
    // Showing error toaster for request error
    toastr.error(error, { timeOut: ERROR_MESSAGE_TOASTER.timeOut });
    return promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function(response) {
    apiCallsCount--;
    if (apiCallsCount === 0) {
      // disptach the action to hide loader when no api calls pending
      store.dispatch({ type: loaderConst.HIDE_LOADER });
    }
    return response.data;
  },
  function(error) {
    apiCallsCount--;

    // disptach the action to hide loader when error occurs
    store.dispatch({ type: loaderConst.HIDE_LOADER });

    // Showing error message at interceptor error handler
    toastr.error(error, { timeOut: ERROR_MESSAGE_TOASTER.timeOut });
    return Promise.reject(error);
  }
);

export default axiosInstance;
