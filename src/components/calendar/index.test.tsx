import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Calendar, { CalendarComponent } from './index';

describe('CalendarComponent', () => {
  const defaultProps = {
    dates: {},
    dataIsLoaded: true,
    renderModalFn: jest.fn(),
    saveDateFn: jest.fn(),
  };

  it('renders', () => {
    expect(shallow(<CalendarComponent {...defaultProps} />)).toMatchSnapshot();
  });
});

describe('Calendar', () => {
  const defaultProps = {
    dates: {},
    dataIsLoaded: true,
  };

  it('renders', () => {
    const store = configureStore([])({});
    expect(
      shallow(
        <Provider store={store}>
          <Calendar {...defaultProps} />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
