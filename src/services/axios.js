import axios from "axios";
import Vue from "vue";

axios.defaults.baseURL = "https://g-pharm-backend-2.herokuapp.com/api";

Vue.use({
  install(Vue) {
    Vue.prototype.$axios = axios;
  },
});
