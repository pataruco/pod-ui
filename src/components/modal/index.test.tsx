import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectedModal, { ModalComponent } from './index';

describe('ModalComponent', () => {
  const defaultProps = {
    isModalOpen: true,
    date: 'somedate',
    files: [],
  };

  it('renders', () => {
    expect(shallow(<ModalComponent {...defaultProps} />)).toMatchSnapshot();
  });
});

describe('ConnectedModal', () => {
  const defaultProps = {
    isModalOpen: true,
    date: 'somedate',
    files: [],
  };

  it('renders', () => {
    const store = configureStore([])({});
    expect(
      shallow(
        <Provider store={store}>
          <ConnectedModal {...defaultProps} />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
