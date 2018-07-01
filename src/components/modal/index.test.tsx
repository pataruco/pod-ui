import { shallow } from 'enzyme';
import React from 'react';
import Modal from 'react-modal';
import ConnectedModal, { ModalComponent } from './index';

// Modal.setAppElement('#root');

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
