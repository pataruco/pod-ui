import { shallow } from 'enzyme';
import React from 'react';
import { Carrousel, SlideWrapper } from './index';

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

describe('SlideWrapper', () => {
  it('render', () => {
    const defaultProps = {
      date: 'somedate',
      file: {
        url: 'someurl',
      },
    };

    expect(shallow(<SlideWrapper {...defaultProps} />)).toMatchSnapshot();
  });
});
