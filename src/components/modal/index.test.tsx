import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Modal, { ModalComponent } from './index';

describe('ModalComponent', () => {
  it('renders', () => {
    const defaultProps = {
      isModalOpen: true,
      date: 'somedate',
      files: [],
    };
    expect(shallow(<ModalComponent {...defaultProps} />)).toMatchSnapshot();
  });
});

describe('Modal', () => {
  const store = configureStore([])({});

  it('renders', () => {
    const defaultProps = {
      isModalOpen: true,
      date: 'somedate',
      files: [],
    };
    expect(
      shallow(
        <Provider store={store}>
          <Modal {...defaultProps} />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
