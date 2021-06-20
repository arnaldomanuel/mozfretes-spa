import Vue from 'vue'
import axios from 'axios'
import store from "../store/index";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
});

const webAxios = axios.create({
  baseURL: 'http://localhost:8000/',
  withCredentials: true,
});

Vue.prototype.$axios = axiosInstance
Vue.prototype.$webAxios = webAxios
