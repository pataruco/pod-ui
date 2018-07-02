import { shallow } from 'enzyme';
import React from 'react';
import CloseButton from './index';

describe('CloseButton', () => {
  it('renders', () => {
    expect(shallow(<CloseButton />)).toMatchSnapshot();
  });
});
