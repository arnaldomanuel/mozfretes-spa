import Vue from 'vue'
import axios from 'axios'
import store from "../store/index";

const axiosInstance = axios.create({
  baseURL: 'http://mozfretesapi.expert.co.mz/api',
  withCredentials: true,
});
/*http://localhost:8000/*/
const webAxios = axios.create({
  baseURL: 'http://mozfretesapi.expert.co.mz/',
  withCredentials: true,
});

Vue.prototype.$axios = axiosInstance
Vue.prototype.$webAxios = webAxios
Vue.prototype.$apiPath="http://mozfretesapi.expert.co.mz/"
Vue.prototype.$store = store
