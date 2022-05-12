import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getData } from "./features/getData";

export const store = createStore(getData, applyMiddleware(thunk));
