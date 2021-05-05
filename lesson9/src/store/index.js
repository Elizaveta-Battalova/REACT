import {createStore} from "redux";

// const store = createStore(
//     rootReduser,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const initialCounterState = {
    count: 0
};

const counter = (state = initialCounterState, action) => {
    switch(action.type) {
        case"INCREMENT": return{
            ...state,
            count: state.count + 1
        }
        case"DECREMENT": return{
            ...state,
            count: state.count - 1
        }
        default: return { ...state };
    }
};

// const initialTodo
// const todo = (state, action) => {

// ;}

const store = createStore(counter, initialCounterState);

export default store