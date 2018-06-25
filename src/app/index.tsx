import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect, Provider } from 'react-redux';
import { getStore } from 'state/store';
import { State } from 'types/state';
// @ts-ignore
import styles from './style.css';

interface Props {
  loading: boolean;
}

const store = getStore();

export class AppComponent extends Component<Props> {
  public render() {
    return (
      <div className={styles.app}>
        <h1> Hola, World! </h1>
      </div>
    );
  }
}

export const mapStateToProps = ({ user: { loading } }: State) => ({
  loading,
});

const ConnectedApp = connect(mapStateToProps)(AppComponent);

const WrappedApp = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default hot(module)(WrappedApp);
