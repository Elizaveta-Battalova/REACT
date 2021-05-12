import { createStore, applyMiddleware } from "redux";
import { addTodo } from "./reduser/addTodo.reduser";
// import logger from "redux-logger";

export const store = createStore(addTodo, applyMiddleware());