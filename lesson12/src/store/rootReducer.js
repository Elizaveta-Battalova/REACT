import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  counter,
  input,
  data: dataReducer,
});
