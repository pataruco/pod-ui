import { shallow } from 'enzyme';
import React from 'react';

import App from './';

describe('App', () => {
  it('renders', () => {
    const result = shallow(<App />);
    expect(result).toMatchSnapshot();
  });
});
