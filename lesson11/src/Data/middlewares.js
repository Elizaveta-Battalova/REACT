import { GET_DATA_SUCCEED } from "./data";

export const detDataMiddleware = store => next => async action => {
    if(action.type === GET_DATA_SUCCEED) {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();

        next({
            type: "GET_DATA_SUCCEED",
            data,
        })
    } else {
        next(action);
    };
} 