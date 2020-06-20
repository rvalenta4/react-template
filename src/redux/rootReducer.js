import { combineReducers } from "redux"
import homeReducer from "../components/home/homeReducer"

const rootReducer = combineReducers({
	home: homeReducer,
})

export default rootReducer
