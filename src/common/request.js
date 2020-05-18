import axios from "axios";

const service = axios.create({
  timeout: 5000,
});
service.interceptors.response.use((resp) => {
  return resp.data;
});
export default service;
