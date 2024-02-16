import axios from "axios";
const BaseURL = "http://64.227.130.2:9000/api/v1";
import { store } from "./store";
const api = axios.create({
  baseURL: `${BaseURL}/api/v1`,
});
export const _setTokenForAPI = async (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
    return;
  }
  const data = localStorage.getItem("token");
  if (data) {
    const _data = JSON.parse(data);
    const _token = _data?.data?.token;
    api.defaults.headers.common["Authorization"] = "Bearer " + _token;
    return;
  }
};
_setTokenForAPI();
api.interceptors.request.use(
  (config) => ({
    ...config,
    validateStatus: (status) => status === 200 && status,
  }),
  (error) => Promise.reject(error)
);
api.interceptors.response.use(undefined, (error) => {

  if (error?.response?.status === 401) {
    store.dispatch({ type: "RESET" });
  }
  return Promise.reject(error);
});
export default api;
