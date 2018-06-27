import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header, { HeaderComponent } from './';

describe('HeaderComponent', () => {
  it('renders', () => {
    const defaultProps = {
      fetchDataFn: () => ({}),
    };
    expect(shallow(<HeaderComponent {...defaultProps} />)).toMatchSnapshot();
  });
});

describe('Connected header', () => {
  const store = configureStore([])({});
  it('renders', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Header />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
