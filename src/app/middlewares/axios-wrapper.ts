import axios from "axios";
import { parse } from "cookie";

const axiosInstance = axios.create({
  baseURL: process.env.DOMAIN,
});
// for adding token
axiosInstance.interceptors.request.use((request) => {
  const cookies = parse(document.cookie);
  if (cookies.token) {
    request.headers.Authorization = `Bearer ${cookies.token}`;
  }
  return request;
});

export default axiosInstance;
