import axios from 'axios';
import { toast } from 'react-toastify';

import Config from './constants';

import {
  clearUserStorage,
} from '@/storage/storage';
import ROUTER_PATH from '@/constants/constants';

const api = axios.create({
  // base URL is read from the "constructor"
  baseURL: 'http://localhost:8181',
  // here are some default headers
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  // 20 second timeout...
  timeout: 20000,

  transformRequest: [
    function (data, headers) {
      // Do whatever you want to transform the data
      const { token } = Config.GLOBAL_VAR;

      console.log("token", Config.GLOBAL_VAR)

      if (headers && token) {
        headers.Authorization = `Bearer ${token}`;
      }

      return data;
    },
    ...(axios.defaults.transformRequest as any),
  ],
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.status === 401) {
      clearUserStorage();
      window.location.href = ROUTER_PATH.LOGIN;
    }

    toast.error(`${error?.message} : ${error?.response.data.error}`);

    return Promise.reject(error);
  },
);

export default api;
