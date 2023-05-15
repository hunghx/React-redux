import { combineReducers } from "redux";
import countReducer from "./countReducer";
import todoReducer from "./todoReducer";

export const reducers = combineReducers({
  count: countReducer,
  todos: todoReducer,
});
