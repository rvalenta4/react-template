import { ADD_ONE, SUBTRACT_ONE } from "./homeConsts"

const addOne = () => ({
	type: ADD_ONE,
})

const subtractOne = () => ({
	type: SUBTRACT_ONE,
})

export { addOne, subtractOne }
