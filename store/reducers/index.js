import { combineReducers } from "redux";
import { indexPage } from "./indexPage";
import { collections } from "./collections";
import { lists } from "./lists";
import { user } from "./user";

export const rootReducer = combineReducers({
	indexPage,
	lists,
	collections,
	user
});

export default rootReducer;
