import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from '../reducers';

const middleware = [thunk, logger];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  applyMiddleware(
    ...middleware,
  ),
);

export default store;
