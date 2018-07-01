import { shallow } from 'enzyme';
import React from 'react';
import { Carrousel, Slide } from './index';

describe('Carrousel', () => {
  it('render', () => {
    const defaultProps = {
      date: 'somedate',
      files: [
        {
          url: 'someurl',
        },
      ],
    };

    expect(shallow(<Carrousel {...defaultProps} />)).toMatchSnapshot();
  });
});

describe('Slide', () => {
  it('render', () => {
    const defaultProps = {
      date: 'somedate',
      file: {
        url: 'someurl',
      },
    };

    expect(shallow(<Slide {...defaultProps} />)).toMatchSnapshot();
  });
});
