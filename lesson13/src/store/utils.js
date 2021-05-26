import React from "react";
// import { render } from "react-dom";
import { ReduxContext} from "../context/ReduxContext";

const createStore = (rootReducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = rootReducer(state, action);

        listeners.forEach(listener => listener(state));
    };

    const subscribe = (listener) => listeners.push(listener);

    dispatch({});

    return {
        getState,
        dispatch,
        subscribe,
    };
};
const nextState = {};
const reducersFunctions = {};
const combineReducers = (reducers) => {
    

    Object.keys(reducers).forEach((reducer) => {
        if (typeof reducers[reducer] === "function") {
            reducersFunctions[reducer] = reducers[reducer];
        }
    });
}

const rootReducer = (state = {}, action) => {
    Object.keys(reducersFunctions).forEach((item) => {
        const reducer = reducersFunctions[item];
        nextState[item] = reducer(state[item], action);
    });

    return nextState;
}

const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
    class Connect extends React.Component {
        state = this.props.store.getState();

        componentDidMount() {
            this.props.store.subscribe((state) => {
                this.setState(state)
            })
        }
        render() {
            const { store } = this.props;
            return <Connect 
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch())}
            />
        }
    }

    return (props) => {
        <ReduxContext.Consumer>
        {(store) => <Connect {...props} store = {store}/>}
        </ReduxContext.Consumer>
    }
}

   

export default {
    createStore,
    combineReducers,
    connect,
    rootReducer
}