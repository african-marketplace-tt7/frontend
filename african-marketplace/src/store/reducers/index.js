import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { marketsReducer } from "./marketsReducer";

export default combineReducers({
	userReducer,
	marketsReducer,
});
