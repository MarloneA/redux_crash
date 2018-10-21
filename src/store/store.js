import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';

const middleware = [ thunk, logger ]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
        ...middleware
    ))
);

export default store;


