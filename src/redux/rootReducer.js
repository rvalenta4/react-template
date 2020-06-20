import { combineReducers } from "redux"
import homeReducer from "src/components/home/homeReducer"

const rootReducer = combineReducers({
	home: homeReducer,
})

export default rootReducer
