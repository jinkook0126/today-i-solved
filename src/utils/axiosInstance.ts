import axios from 'axios';

const host = 'http://localhost:3010/';
const axiosInstance = axios.create({
  baseURL: host,
  withCredentials: true,
});

export default axiosInstance;
