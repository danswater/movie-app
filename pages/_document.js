/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    margin: 0;

    background-color: #f4f9ff;
    font-family: 'Open Sans', sans-serif;

    .pointer {
      cursor: pointer;
    }

    .cleafix {
      clear: both;
    }

    margin-bottom-0 {
      margin-bottom: 0;
    }

    .margin-bottom-20 {
      margin-bottom: 20px;
    }
  }
`;

export class MovieDocument extends Document {
  render() {
    return (
      <html lang="en">
        <GlobalStyle />
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MovieDocument.getInitialProps = function getInitialProps({ renderPage }) {
  const sheet = new ServerStyleSheet();


  const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));


  const styleTags = sheet.getStyleElement();


  return { ...page, styleTags };
};

export default MovieDocument;
