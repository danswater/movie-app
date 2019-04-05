/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../../pages/index';
import Section from '../../components/Section';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const movie = {
        backdrop_path: '',
        original_title: 'Batman',
        poster_path: 'Batman',
        overview: 'Batman is batman',
      };

      const wrap = shallow(<IndexPage related={[]} movie={movie} />);
      expect(wrap.find(Section)).toHaveLength(4);
    });
  });
});
