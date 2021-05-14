import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './rootReducer';
import { initialState } from './intialState';

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhacers = [devtoolsExtension];

const middlewares = [thunkMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhacers,
)

const store = createStore(
  rootReducer, 
  initialState,
  composedEnhancers
);

export default store;
