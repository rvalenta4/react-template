import { combineReducers } from "redux"
import homeReducer from "./app/appReducer"

const rootReducer = combineReducers({
	home: homeReducer,
})

export default rootReducer
