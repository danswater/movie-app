/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-styled-flexboxgrid';
import { POSTER_URL } from '../../utils/constants';
import Image from '../Image';

const index = ({ loading, movie }) => (
  <Col xs={12} sm={12} md={12} lg={12}>
    {!loading && (
      <React.Fragment>
        <h2>Sypnosis</h2>
        <Row>
          <Col xs={12} sm={12} md={9} lg={9}>
            <p>{movie.overview}</p>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Image
              width={215}
              src={`${POSTER_URL}${movie.poster_path}`}
            />
          </Col>
        </Row>
      </React.Fragment>
    )}
  </Col>
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
};

export default index;
