import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addOne, subtractOne } from "./appActions"

const App = () => {
	const dispatch = useDispatch()
	const counter = useSelector((state) => state.home.counter)

	return (
		<>
			<div>App</div>
			<div>{counter}</div>
			<button onClick={() => dispatch(addOne())}>Add 1</button>
			<button onClick={() => dispatch(subtractOne())}>Subtract 1</button>
		</>
	)
}

export default App
