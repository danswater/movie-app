/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow, mount } from 'enzyme';
import IndexPage from '../../pages/index';
import Section from '../../components/Section';
import RelatedCol from '../../components/RelatedCol';

describe('Pages', () => {
  const movie = {
    id: 1,
    backdrop_path: '',
    original_title: 'Batman',
    poster_path: 'Batman',
    overview: 'Batman is batman',
  };

  describe('Index.getInitialProps', () => {
    it('should be able to return data', async () => {
      const resp = await IndexPage.getInitialProps();
      expect(resp.movie).toBeDefined();
    });
  });

  describe('Index', () => {
    it('should render without throwing an error', () => {
      const relatedMovies = [movie];

      const wrap = shallow(<IndexPage related={relatedMovies} movie={movie} />);
      expect(wrap.find(Section)).toHaveLength(4);
      expect(wrap.find(RelatedCol)).toHaveLength(1);
    });

    it('should render and set fav to true', () => {
      localStorage.setItem('favList', JSON.stringify([1]));

      const relatedMovies = [movie];

      const wrap = shallow(<IndexPage related={relatedMovies} movie={movie} />);
      expect(wrap.find(Section)).toHaveLength(4);
      expect(wrap.find(RelatedCol)).toHaveLength(1);
    });

    it('should render and set fav to true', () => {
      localStorage.setItem('favList', JSON.stringify([1]));

      const relatedMovies = [movie];

      const wrap = shallow(<IndexPage related={relatedMovies} movie={movie} />);
      expect(wrap.find(Section)).toHaveLength(4);
      expect(wrap.find(RelatedCol)).toHaveLength(1);
    });

    describe('handleFavourite', () => {
      it('should be able to set fav to true', () => {
        localStorage.setItem('favList', null);

        const relatedMovies = [movie];

        const wrap = mount(<IndexPage related={relatedMovies} movie={movie} />);
        wrap.find('.favourite').simulate('click');
        expect(wrap.state('movie').fav).toBe(true);
      });

      it('should be able to set fav to false', () => {
        const relatedMovies = [movie];

        const wrap = mount(<IndexPage related={relatedMovies} movie={movie} />);
        wrap.find('.favourite').simulate('click');
        expect(wrap.state('movie').fav).toBe(false);
      });
    });
  });
});
