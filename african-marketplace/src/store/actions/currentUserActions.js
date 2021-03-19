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

export const addSaleItem = (newItem) => {
	return (dispatch) => {
		dispatch({ type: "UPDATE_SALEITEMS_START" });

		axiosWithAuth()
			.post("/items/item", newItem)
			.then((res) => {
				console.log("response", res);
				dispatch({
					type: "UPDATE_SALEITEMS_SUCCESS",
					payload: res.data.user.itemsForSale,
				});
			})
			.catch((err) => {
				dispatch({ type: "SET_ERROR", payload: err.message });
			});
	};
};

export const deleteSaleItem = (id) => {
	return (dispatch) => {
		dispatch({ type: "DELETE_SALEITEM_START" });

		axiosWithAuth()
			.delete(`/items/item/${id}`)
			.then((res) => {
				console.log("response", res);
				dispatch({
					type: "DELETE_SALEITEM_SUCCESS",
					payload: id,
				});
			})
			.catch((err) => {
				dispatch({ type: "SET_ERROR", payload: err.message });
			});
	};
};
