/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-styled-flexboxgrid';
import { POSTER_URL } from '../../utils/constants';
import Button from '../Button';
import Section from '../Section';
import {
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardExtraContent,
} from '../Card';

const index = ({ loading, related }) => (
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
      <h2>Related videos</h2>
      {!loading && (
        <React.Fragment>
          <Row>
            {related.map(item => (
              <Col xs={12} sm={6} md={2} lg={2} key={item.id}>
                <Card>
                  <CardImage
                    src={`${POSTER_URL}${item.poster_path}`}
                    alt={item.original_title}
                  />
                  <CardContent>
                    <CardHeader>{item.original_title}</CardHeader>
                  </CardContent>
                  <CardExtraContent>
                    <Button>Watch</Button>
                  </CardExtraContent>
                </Card>
              </Col>
            ))}
          </Row>

          <Row around="md">
            <Col xs={12} sm={12} md={2} lg={2}>
              <Section marginTop>
                <Button>View All</Button>
              </Section>
            </Col>
          </Row>
        </React.Fragment>
      )}
    </Col>
  </Row>
);

const movie = PropTypes.shape({
  backdrop_path: PropTypes.string,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
});

index.propTypes = {
  loading: PropTypes.bool.isRequired,
  related: PropTypes.arrayOf(movie).isRequired,
};

export default index;
