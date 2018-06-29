import { shallow } from 'enzyme';
import React from 'react';
import { CalendarComponent } from './index';

describe('CalendarComponent', () => {
  const defaultProps = {
    dates: {},
    dataIsLoaded: true,
  };

  it('renders', () => {
    expect(shallow(<CalendarComponent {...defaultProps} />)).toMatchSnapshot();
  });
});
