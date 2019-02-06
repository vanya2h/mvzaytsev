import { combineReducers } from "redux";
import { indexPage } from "./indexPage";
import { collections } from "./collections";
import { user } from "./user";

export const rootReducer = combineReducers({ indexPage, collections, user });

export default rootReducer;
