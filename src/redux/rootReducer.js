import { combineReducers } from "redux"
import homeReducer from "../components/app/appReducer"

const rootReducer = combineReducers({
	home: homeReducer,
})

export default rootReducer
