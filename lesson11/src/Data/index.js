import { createStore, compose, applyMiddleware } from "redux-thunk";
import thunkMidleware from "redux-thunk";
import { setPersist } from "../redux/reduser/addTodo.reduser";
import { initState } from "../redux/reduser/addTodo.reduser";
