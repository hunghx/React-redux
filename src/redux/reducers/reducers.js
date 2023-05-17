import { combineReducers } from "redux";
import countReducer from "./countReducer";
import todoReducer from "./todoReducer";
import { cartReducer } from "./cartReducer";

export const reducers = combineReducers({
  count: countReducer,
  todos: todoReducer,
  cart: cartReducer,
});
