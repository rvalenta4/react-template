import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addOne, subtractOne } from "~/components/home/homeActions"

export const Home = () => {
	const dispatch = useDispatch()
	const counter = useSelector((state) => state.home.counter)

	return (
		<>
			<div>Home</div>
			<div>{counter}</div>
			<button onClick={() => dispatch(addOne())}>Add 1</button>
			<button onClick={() => dispatch(subtractOne())}>Subtract 1</button>
		</>
	)
}
