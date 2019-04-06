/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-styled-flexboxgrid';
import { BACKDROP_URL } from '../../utils/constants';
import CircularImage from '../CircularImage';
import Header from '../Header';
import InvertedButton from '../InvertedButton';

const index = ({ loading, movie, handleFavourite }) => (
  <React.Fragment>
    <Row>
      <Col xs={12} sm={6} md={10} lg={10} className="margin-bottom-20">
        {!loading && (
          <React.Fragment>
            <CircularImage src={`${BACKDROP_URL}${movie.backdrop_path}`} />
            <Header>{movie.original_title}</Header>
            <svg
              onClick={handleFavourite}
              className="favourite pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path fill={movie.favColor} fillRule="evenodd" d="M14.34 26.594l-7.15 3.829a.6.6 0 0 1-.876-.629L8 19.784l-7.15-7.1a.6.6 0 0 1 .335-1.018l9.87-1.461 4.405-9.09a.6.6 0 0 1 1.08 0l4.404 9.09 9.871 1.46a.6.6 0 0 1 .335 1.02l-2.485 2.467A9.956 9.956 0 0 0 24 14c-5.523 0-10 4.477-10 10 0 .897.118 1.767.34 2.594zM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm3.429-8.871H24.87V20.57A.873.873 0 0 0 24 19.7a.873.873 0 0 0-.871.871v2.558H20.57A.873.873 0 0 0 19.7 24c0 .48.391.871.871.871h2.558v2.558c0 .48.391.871.871.871s.871-.391.871-.871V24.87h2.558c.48 0 .871-.391.871-.871a.873.873 0 0 0-.871-.871z" />
            </svg>
            <div className="cleafix" />
          </React.Fragment>
        )}
      </Col>
      <Col xs={12} sm={6} md={2} lg={2}>
        <Row>
          <Col xs={4} sm={4} md={12} lg={12}>
            <InvertedButton>Play Video</InvertedButton>
          </Col>
          <Col xs={4} sm={4} md={12} lg={12}>
            <InvertedButton>Watch Later</InvertedButton>
          </Col>
          <Col xs={4} sm={4} md={12} lg={12}>
            <InvertedButton>Share</InvertedButton>
          </Col>
        </Row>
      </Col>
    </Row>
  </React.Fragment>
);

const movie = PropTypes.shape({
  backdrop_path: PropTypes.string,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
});

index.propTypes = {
  loading: PropTypes.bool.isRequired,
  movie: PropTypes.oneOfType([PropTypes.bool, movie]).isRequired,
  handleFavourite: PropTypes.func.isRequired,
};

export default index;
