import api from "./base-api";

const getPage = (request) =>
  api.get(`/pages/list`, request);
export default {
  getPage
};
