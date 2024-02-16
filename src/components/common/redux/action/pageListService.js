import api from "../../../config/api";
import { _setTokenForAPI } from "../../../config/apiConfig";

export const userPage =
	(data, toNavigate = true) =>
	dispatch => {
		// dispatch({ type: AUTH.LOADING, payload: true });
		api.user
			.userPageList(data)
			.then(response => {
					dispatch({ type: "PAGE_LIST", data: response.data.data });
			})
			// .catch(() => dispatch({ type: AUTH.LOADING, data: false }))
			// .finally(() => dispatch({ type: AUTH.LOADING, data: false }));
};

