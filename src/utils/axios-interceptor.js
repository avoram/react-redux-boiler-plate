import axios from "axios";
import { toastr } from "react-redux-toastr";

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
  //TODO:: Show Loader add here
  function(config) {
    apiCallsCount++;
    console.log("Show Loader ", apiCallsCount);
    return config;
  },
  function(error) {

    // Showing error toaster for request error
    toastr.error(error, {timeOut: ERROR_MESSAGE_TOASTER.timeOut});
    return promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function(response) {
    // Do something with response data
    apiCallsCount--;
    console.log("apiCallsCount ", apiCallsCount);
    
    if (apiCallsCount === 0) {
      console.log("Hide Loader ");
    }
    return response.data;
  },
  function(error) {
    // Do something with response error
    //TODO:: Hide Loader add here
    apiCallsCount--;
    console.log("Hide Loader");

    // Showing error message at interceptor error handler
    toastr.error(error, {timeOut: ERROR_MESSAGE_TOASTER.timeOut});
    return Promise.reject(error);
  }
);

export default axiosInstance;
