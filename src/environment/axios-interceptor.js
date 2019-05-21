import axios from "axios";
import promise from "promise";
import { API_BASE_URL } from "./config";

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
    // Do something with request error
    return promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function(response) {
    // Do something with response data
    //TODO:: Hide Loader add here
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
    if (apiCallsCount === 0) {
      console.log("Hide Loader");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
