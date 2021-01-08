import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const fetchAllMarkets = () => {
	return (dispatch) => {
		dispatch({ type: "FETCH_ALLMARKETS_START" });

		axiosWithAuth()
			.get("/marketlocations/marketlocations")
			.then((res) => {
				dispatch({ type: "FETCH_ALLMARKETS_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "SET_ERROR", payload: err.message });
			});
	};
};
