import Calendar from 'components/calendar';
import Header from 'components/header';
import Modal from 'components/modal';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect, Provider } from 'react-redux';
import { getStore } from 'state/store';
import { State } from 'types/state';
// @ts-ignore
import styles from './style.css';

interface Props {
  loading: boolean;
  isModalOpen: boolean;
}

const store = getStore();

export class AppComponent extends Component<Props> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.app}>
        <h1> Hola, World </h1>
        <Header />
        <Calendar />
        <Modal />
      </div>
    );
  }
}

export const mapStateToProps = ({
  user: { loading },
  modal: { isModalOpen },
}: State) => ({
  loading,
  isModalOpen,
});

const ConnectedApp = connect(mapStateToProps)(AppComponent);

const WrappedApp = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default hot(module)(WrappedApp);
