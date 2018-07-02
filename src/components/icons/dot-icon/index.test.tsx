import { shallow } from 'enzyme';
import React from 'react';
import DotIcon from './index';

describe('DotIcon', () => {
  it('renders', () => {
    expect(shallow(<DotIcon />)).toMatchSnapshot();
  });
});
