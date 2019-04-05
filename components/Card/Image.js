/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: block;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 0;
  background: rgba(0,0,0,.05);

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: inherit;
  }
`;

const Index = ({ alt, src }) => (
  <Container>
    <img alt={alt} src={src} />
  </Container>
);

Index.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Index;
