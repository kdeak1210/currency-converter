import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from './sagas';

let store;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger); // logger should always be last pushed (listen to all)
}

export default {
  configure: preloadedState => {
    // preloadedState can be null (no SSR)
    if (preloadedState) {
      store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middleware)
      );
    } else {
      store = createStore(rootReducer, applyMiddleware(...middleware));
    }

    sagaMiddleware.run(rootSaga);
    return store;
  },

  currentStore: () => store
};
