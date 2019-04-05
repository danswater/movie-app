/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Image from '../../components/Image';

describe('Components', () => {
  describe('Image', () => {
    it('should render image with default styles', () => {
      const tree = renderer.create(
        <Image
          src="https://image.tmdb.org/t/p/w500/image.jpg"
        />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('width', '315px');
      expect(tree).toHaveStyleRule('float', 'none');
    });

    it('should render image with custom styles', () => {
      const tree = renderer.create(
        <Image
          floatRight
          width={200}
        />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('width', '200px');
      expect(tree).toHaveStyleRule('float', 'right');
    });
  });
});
