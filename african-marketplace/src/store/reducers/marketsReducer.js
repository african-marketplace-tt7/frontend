export const initialState = {
	isLoading: false,
	error: "",
	marketLocations: [],
};

export const marketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_ALLMARKETS_START":
			return {
				...state,
				isLoading: true,
				error: "",
			};
		case "FETCH_ALLMARKETS_SUCCESS":
			return {
				...state,
				isLoading: false,
				marketLocations: action.payload,
			};
		case "SET_ERROR":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
