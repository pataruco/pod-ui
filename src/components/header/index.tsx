import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { fetchData } from 'state/user/actions';

interface Props {
  fetchDataFn: typeof dispatch;
}

export class HeaderComponent extends Component<Props> {
  public componentWillMount() {
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

const mapDispatchToProps = dispatchFn => ({
  fetchDataFn: dispatchFn(fetchData),
});

const ConnectedHeader = connect(
  undefined,
  mapDispatchToProps,
)(HeaderComponent);

export default ConnectedHeader;
