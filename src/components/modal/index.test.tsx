import { shallow } from 'enzyme';
import React from 'react';
import { ModalComponent } from './index';

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
