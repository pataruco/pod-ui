import moment from 'moment';
import React, { Component } from 'react';
// @ts-ignore
import { connect, dispatch } from 'react-redux';
import { fetchData } from 'state/user/actions';
import styles from './style.css';

interface Props {
  dataIsLoaded: boolean;
  fetchDataFn: typeof dispatch;
  updated: string;
}

export class HeaderComponent extends Component<Props> {
  public componentWillMount() {
    return this.props.fetchDataFn;
  }

  public render() {
    const { dataIsLoaded, updated } = this.props;
    const lastUpdate = moment(updated).fromNow();
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Peter of the day</h1>
        {dataIsLoaded && (
          <aside>
            <p>
              Carlotta is here updated{' '}
              <time dateTime={updated}>{lastUpdate}</time>
            </p>
          </aside>
        )}
      </header>
    );
  }
}

const mapStateToProps = ({
  user: {
    dataIsLoaded,
    data: { updated },
  },
}) => ({
  dataIsLoaded,
  updated,
});

const mapDispatchToProps = dispatchFn => ({
  fetchDataFn: dispatchFn(fetchData),
});

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent);

export default ConnectedHeader;
