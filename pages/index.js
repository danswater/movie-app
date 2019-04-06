/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-styled-flexboxgrid';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Section from '../components/Section';
import Divider from '../components/Divider';
import HeaderSection from '../components/HeaderSection';
import SearchSection from '../components/SearchSection';
import DetailsSection from '../components/DetailsSection';
import RelatedMovieSection from '../components/RelatedMovieSection';
import {
  API_KEY,
  API_URL,
  SEARCH_URL,
} from '../utils/constants';

export class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: false,
      loading: true,
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
      loading: false,
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
    const { movie, loading } = this.state;

    return (
      <Grid>
        <Head>
          <title>Movie App</title>
        </Head>

        <Section marginTop>
          <HeaderSection
            loading={loading}
            movie={movie}
            handleFavourite={this.handleFavourite}
          />
        </Section>

        <Divider />

        <Section>
          <SearchSection />
        </Section>

        <Section>
          <DetailsSection
            loading={loading}
            movie={movie}
          />
        </Section>

        <Section>
          <RelatedMovieSection
            loading={loading}
            related={related}
          />
        </Section>
      </Grid>
    );
  }
}

Index.getInitialProps = async function getInitialProps() {
  const res = await fetch(`${SEARCH_URL}multi?language=en-US&query=alita`);
  const data = await res.json();

  const movie = data.results[0];

  const relRes = await fetch(`${API_URL}/3/movie/${movie.id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
  const relData = await relRes.json();
  const related = relData.results.slice(0, 6);

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
