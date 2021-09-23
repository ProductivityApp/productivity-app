import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

//do we need composeWithDevTools??
//what does applyMiddleWare(thunk) do?
const enhancers = [composeWithDevTools(),applyMiddleware(thunk)];

const store = createStore(
  rootReducer,
  // compose(...enhancers)
  applyMiddleware(thunk)
);

export default store;