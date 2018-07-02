import { shallow } from 'enzyme';
import React from 'react';
import Arrow from './index';

describe('Arrow', () => {
  it('renders', () => {
    expect(shallow(<Arrow />)).toMatchSnapshot();
  });
});
