import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers';

let store;

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
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
      return store;
    }

    store = createStore(rootReducer, applyMiddleware(...middleware));
    return store;
  },

  currentStore: () => store
};
