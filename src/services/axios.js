import axios from "axios";
import Vue from "vue";

const api = axios.create({
  baseURL:  "https://g-pharm-backend-2.herokuapp.com/api"
})


// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("application-token");

    const headers = {
      "Authorization": `Bearer ${token}`
    };
    config.headers = headers;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


Vue.use({
  install(Vue) {
    Vue.prototype.$axios = api;
  },
});
