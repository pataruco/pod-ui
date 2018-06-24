import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
// @ts-ignore
import styles from './style.css';

const store = createStore(rootReducer);

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <h1> Hola, World! </h1>
        </div>
      </Provider>
    );
  }
}

export default hot(module)(App);
