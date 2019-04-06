/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import DetailsSection from '../../../components/DetailsSection';
import Image from '../../../components/Image';

describe('Components', () => {
  const movie = {
    id: 1,
    backdrop_path: '',
    original_title: 'Batman',
    poster_path: 'Batman',
    overview: 'Batman is batman',
  };

  describe('DetailsSection', () => {
    it('should render without throwing an error', () => {
      const wrap = shallow(<DetailsSection loading={false} movie={movie} />);
      expect(wrap.find(Image)).toHaveLength(1);
    });

    it('should render without data', () => {
      const wrap = shallow(<DetailsSection loading movie={false} />);
      expect(wrap.find(Image)).toHaveLength(0);
    });
  });
});
