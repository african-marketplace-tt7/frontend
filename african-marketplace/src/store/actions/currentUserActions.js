import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const fetchCurrentUser = () => {
	return (dispatch) => {
		dispatch({ type: "FETCH_CURRENTUSER_START" });

		axiosWithAuth()
			.get("/users/getuserinfo")
			.then((res) => {
				dispatch({ type: "FETCH_CURRENTUSER_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "SET_ERROR", payload: err.message });
			});
	};
};
