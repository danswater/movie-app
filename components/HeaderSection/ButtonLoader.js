/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ContentLoader from 'react-content-loader';

const BackButton = () => (
  <ContentLoader
    height={30.84}
    width={189.33}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="-3" y="0" rx="5" ry="5" width="194" height="29" />
    <rect x="600" y="-60" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
);

export default BackButton;
