import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { fetchData } from 'state/user/actions';

interface Props {
  fetchDataFn: typeof dispatch;
}

class HeaderComponent extends Component<Props> {
  public componentWillMount() {
    // todo
    return this.props.fetchDataFn;
  }

  public render() {
    return (
      <header>
        <h1>I am the header</h1>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatchFn: typeof dispatch) => ({
  fetchDataFn: dispatchFn(fetchData),
});

const ConnectedHeader = connect(
  undefined,
  mapDispatchToProps,
)(HeaderComponent);

export default ConnectedHeader;
