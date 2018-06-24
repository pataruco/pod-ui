// import { createBrowserHistory } from 'history';
// import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'state/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// let history;
// export const getHistory = () => {
//   if (!history) {
//     history = createBrowserHistory({ basename: PUBLIC_URL });
//   }

//   return history;
// };

export const getStore = (defaultState = {}) => {
  const middlewares = [
    thunk,
    // pageQueryMiddleware,
    // routerMiddleware(getHistory()),
  ];

  const composeEnhancers =
    process.env.NODE_ENV === 'production'
      ? compose
      : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

  return createStore(
    reducer,
    defaultState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
};
