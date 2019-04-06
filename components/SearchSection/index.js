/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-styled-flexboxgrid';
import SearchLoader from './SearchLoader';
import BackButtonLoader from './BackButtonLoader';
import BackButton from './BackButton';
import SearchField from './SearchField';

const index = ({ loading }) => (
  <Row>
    <Col xs={12} sm={12} md={8} lg={8}>
      {!loading && <BackButton />}
      {loading && <BackButtonLoader />}
    </Col>
    <Col xs={12} sm={12} md={4} lg={4}>
      {!loading && (
        <SearchField>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="#004FEF" fillRule="evenodd" d="M11.732 10.324h-.741l-.263-.253a6.1 6.1 0 0 0 1.389-5.012C11.676 2.45 9.498.367 6.87.048A6.105 6.105 0 0 0 .048 6.87c.319 2.627 2.402 4.805 5.011 5.246a6.1 6.1 0 0 0 5.012-1.39l.253.264v.741l4.278 4.274L16 14.607l-4.268-4.283zm-5.631 0a4.218 4.218 0 0 1-4.223-4.223A4.218 4.218 0 0 1 6.1 1.878 4.218 4.218 0 0 1 10.324 6.1a4.218 4.218 0 0 1-4.223 4.223z" />
          </svg>
          <input type="text" placeholder="Search for a movie" />
        </SearchField>
      )}

      {loading && <SearchLoader />}
    </Col>
  </Row>
);

index.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default index;
