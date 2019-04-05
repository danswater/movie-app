/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import Section from '../components/Section';
import Divider from '../components/Divider';
import BackButton from '../components/BackButton';
import SearchField from '../components/SearchField';
import Image from '../components/Image';
import Button from '../components/Button';
import InvertedButton from '../components/InvertedButton';
import CircularImage from '../components/CircularImage';
import Header from '../components/Header';
import RelatedCol from '../components/RelatedCol';
import {
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardExtraContent,
} from '../components/Card';

export class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: false,
    };

    this.handleFavourite = this.handleFavourite.bind(this);
  }

  componentDidMount() {
    const { movie } = this.props;

    const favList = JSON.parse(localStorage.getItem('favList')) || [];

    let fav = false;
    let favColor = '#7FA7F7';

    if (favList.indexOf(movie.id) !== -1) {
      fav = true;
      favColor = '#e4cd00';
    }

    this.setState({
      movie: {
        ...movie,
        fav,
        favColor,
      },
    });
  }

  handleFavourite() {
    const { movie } = this.state;

    const favList = JSON.parse(localStorage.getItem('favList')) || [];

    let fav;
    let favColor;

    const index = favList.indexOf(movie.id);
    if (index !== -1) {
      fav = false;
      favColor = '#7FA7F7';
      favList.splice(index, 1);
    } else {
      fav = true;
      favColor = '#e4cd00';
      favList.push(movie.id);
    }

    localStorage.setItem('favList', JSON.stringify(favList));

    this.setState({
      movie: {
        ...movie,
        fav,
        favColor,
      },
    });
  }

  render() {
    const { related } = this.props;
    const { movie } = this.state;

    return (
      <Grid>
        <Head>
          <title>Movie App</title>
        </Head>

        <Row>
          <Col xs={12} sm={6} md={10} lg={10}>
            <Section paddedTop>
              <CircularImage src={`https://image.tmdb.org/t/p/w154/${movie.backdrop_path}`} />
              <Header>{movie.original_title}</Header>
              <svg
                onClick={this.handleFavourite}
                className="favourite pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
              >
                <path fill={movie.favColor} fillRule="evenodd" d="M14.34 26.594l-7.15 3.829a.6.6 0 0 1-.876-.629L8 19.784l-7.15-7.1a.6.6 0 0 1 .335-1.018l9.87-1.461 4.405-9.09a.6.6 0 0 1 1.08 0l4.404 9.09 9.871 1.46a.6.6 0 0 1 .335 1.02l-2.485 2.467A9.956 9.956 0 0 0 24 14c-5.523 0-10 4.477-10 10 0 .897.118 1.767.34 2.594zM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm3.429-8.871H24.87V20.57A.873.873 0 0 0 24 19.7a.873.873 0 0 0-.871.871v2.558H20.57A.873.873 0 0 0 19.7 24c0 .48.391.871.871.871h2.558v2.558c0 .48.391.871.871.871s.871-.391.871-.871V24.87h2.558c.48 0 .871-.391.871-.871a.873.873 0 0 0-.871-.871z" />
              </svg>
            </Section>
          </Col>
          <Col xs={12} sm={6} md={2} lg={2}>
            <InvertedButton>Play Video</InvertedButton>
            <InvertedButton>Watch Later</InvertedButton>
            <InvertedButton>Share</InvertedButton>
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col xs={12} sm={6} md={6} lg={8}>
            <BackButton />
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <SearchField>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="#004FEF" fillRule="evenodd" d="M11.732 10.324h-.741l-.263-.253a6.1 6.1 0 0 0 1.389-5.012C11.676 2.45 9.498.367 6.87.048A6.105 6.105 0 0 0 .048 6.87c.319 2.627 2.402 4.805 5.011 5.246a6.1 6.1 0 0 0 5.012-1.39l.253.264v.741l4.278 4.274L16 14.607l-4.268-4.283zm-5.631 0a4.218 4.218 0 0 1-4.223-4.223A4.218 4.218 0 0 1 6.1 1.878 4.218 4.218 0 0 1 10.324 6.1a4.218 4.218 0 0 1-4.223 4.223z" />
              </svg>

              <input type="text" placeholder="Search for a movie" />
            </SearchField>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Section>
              <h2>Sypnosis</h2>
              <Image
                floatRight
                width={315}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <p>{movie.overview}</p>
            </Section>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Section>
              <h2>Related videos</h2>
              <Row around="lg">
                {related.map(item => (
                  <RelatedCol lg={2} key={item.id}>
                    <Card>
                      <CardImage
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={item.original_title}
                      />
                      <CardContent>
                        <CardHeader>{item.original_title}</CardHeader>
                      </CardContent>
                      <CardExtraContent>
                        <Button>Watch</Button>
                      </CardExtraContent>
                    </Card>
                  </RelatedCol>
                ))}
              </Row>

              <Row around="lg">
                <Col xs={12} sm={12} md={2} lg={2}>
                  <Section paddedTop>
                    <Button>View All</Button>
                  </Section>
                </Col>
              </Row>
            </Section>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Index.getInitialProps = async function getInitialProps() {
  const res = await fetch('https://www.themoviedb.org/search/multi?language=en-US&query=alita');
  const data = await res.json();

  const movie = data.results[0];

  const res2 = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=9034cc043d42809e961504fa9fc98d34&language=en-US&page=1`);
  const relData = await res2.json();
  const related = relData.results.slice(0, 5);

  return {
    movie,
    related,
  };
};

const Movie = PropTypes.shape({
  backdrop_path: PropTypes.string,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
});

const RelatedMovies = PropTypes.arrayOf(Movie);

Index.propTypes = {
  movie: Movie.isRequired,
  related: RelatedMovies.isRequired,
};

export default Index;
