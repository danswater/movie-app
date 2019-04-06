/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ContentLoader from 'react-content-loader';

const SearchLoader = () => (
  <ContentLoader
    height={46.88}
    width={394.66}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="2" rx="5" ry="5" width="391" height="59" />
    <rect x="600" y="-60" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
);

export default SearchLoader;
