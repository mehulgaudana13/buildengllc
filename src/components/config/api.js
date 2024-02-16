import api from "./apiConfig";

const body = data => {
	return new URLSearchParams(data).toString();
};

const user = {
	userPageList: data => api.get(`/pages/list`, data),
};

export default {
	user,
};
