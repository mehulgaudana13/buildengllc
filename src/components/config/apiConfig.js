import axios from "axios";
import { AUTH } from "../common/redux/reducers/pageList";
import { store } from "../common/redux/store";
let BaseURL = "http://64.227.130.2:9000"
const api = axios.create({
	baseURL: `${BaseURL}/api/v1`
});

export const _setTokenForAPI = async token => {
	if (token) {
		api.defaults.headers.common["Authorization"] = "Bearer " + token;
		return;
	}
	const data = await localStorage.getItem("page_list");
	if (data) {
		const _data = JSON.parse(data);
		const _token = _data?.data?.token;
		api.defaults.headers.common["Authorization"] = "Bearer " + _token;
		return;
	}
};
_setTokenForAPI();
api.interceptors.request.use(
	config => ({
		...config,
		validateStatus: status => status === 200 && status
	}),
	error => Promise.reject(error)
);

api.interceptors.response.use(undefined, error => {
	if (error?.toJSON()?.message !== "Network Error") {
		if (error?.response?.data?.message?.includes("Device is not available")) {
		} else if (
			error?.response?.data?.message?.includes(
				"Please book consultation first or if you have booked then wait to be completed."
			)
		) {
		} else {
			
		}
	} else {
	}

	if (error?.response?.status === 401) {
		store.dispatch({ type: "TEst" });
	}

	return Promise.reject(error);
});

export default api;
