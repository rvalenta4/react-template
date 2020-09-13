import { produce } from "immer";
import { ADD_ONE, SUBTRACT_ONE } from "./appConsts";

const initialState = {
	counter: 0,
};

const appReducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case ADD_ONE: {
				draft.counter = state.counter + 1;
				break;
			}
			case SUBTRACT_ONE: {
				draft.counter = state.counter - 1;
				break;
			}
			default: {
				break;
			}
		}
	});
};

export default appReducer;
