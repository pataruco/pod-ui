import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import styles from './style.css';

class App extends Component {
  public render() {
    return (
      <div className={styles.app}>
        <h1> Hola, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
