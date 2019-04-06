/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import HeaderSection from '../../../components/HeaderSection';
import CircularImage from '../../../components/CircularImage';

describe('Components', () => {
  const movie = {
    id: 1,
    backdrop_path: '',
    original_title: 'Batman',
    poster_path: 'Batman',
    overview: 'Batman is batman',
  };

  describe('HeaderSection', () => {
    it('should render without throwing an error', () => {
      const wrap = shallow(
        <HeaderSection loading={false} movie={movie} handleFavourite={() => {}} />,
      );
      expect(wrap.find(CircularImage)).toHaveLength(1);
    });

    it('should render without data', () => {
      const wrap = shallow(
        <HeaderSection loading movie={false} handleFavourite={() => {}} />,
      );
      expect(wrap.find(CircularImage)).toHaveLength(0);
    });
  });
});
