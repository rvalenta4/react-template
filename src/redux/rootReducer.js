import { combineReducers } from "redux";
import appReducer from "./app/appReducer";

const rootReducer = combineReducers({
	home: appReducer,
});

export default rootReducer;
