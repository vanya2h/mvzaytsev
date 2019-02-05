import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers";

const createStoreEntity = (initialState = {}) => {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	);
};

export const store = createStoreEntity();

export default store;
