// Redux setup file nton nton
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { configureStore, combineReducers, applyMiddleware } from 'redux';

import userReducer from './reducers/userReducer'; // Import userReducer

// merge reducers
const rootReducer = combineReducers({
  users: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(/* logger or thunker (not now) */));

export default store;
