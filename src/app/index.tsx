import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
