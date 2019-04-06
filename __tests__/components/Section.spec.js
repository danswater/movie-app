/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Section from '../../components/Section';

describe('Components', () => {
  describe('Image', () => {
    it('should render section with default styles', () => {
      const tree = renderer.create(
        <Section />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('margin-top', '0');
      expect(tree).toHaveStyleRule('margin-bottom', '0');
    });

    it('should render section with margin props', () => {
      const tree = renderer.create(
        <Section
          marginTop
          marginBottom
        />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('margin-top', '2rem');
      expect(tree).toHaveStyleRule('margin-bottom', '2rem');
    });
  });
});
