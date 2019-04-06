/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ContentLoader from 'react-content-loader';

const BackButtonLoader = () => (
  <ContentLoader
    height={29}
    width={68.88}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    style={{
      height: '29px',
      width: '68.88px',
    }}
  >
    <rect x="1" y="0" rx="5" ry="5" width="67" height="27" />
    <rect x="600" y="-60" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
);

export default BackButtonLoader;
