import axios from "axios";
import Vue from "vue";

axios.defaults.baseURL = "http://localhost:3333/api";

Vue.use({
  install(Vue) {
    Vue.prototype.$axios = axios;
  },
});
