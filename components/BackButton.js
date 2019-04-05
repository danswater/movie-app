/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

const BackButton = styled.button`
  margin-bottom: 0.75em;
  margin-right: 0.25em;
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  padding: .78571429em 1.5em .78571429em;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 0 0 2px #0855f4 inset!important;
  color: #fff !important;
  background: #0855f4 !important;
  font-weight: bold;
  border-radius: 5px;
  position: relative;
  padding-left: 30px;

  svg {
    left: 8px;
    position: absolute;
    top: 9px;
  }
`;

const Index = () => (
  <BackButton>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 16 16">
      <defs>
        <path id="a" d="M-1.12 4L5 10.107 11.12 4 13 5.88l-8 8-8-8z" />
      </defs>
      <use fill="white" fillRule="evenodd" transform="rotate(90 6.97 9.97)" xlinkHref="#a" />
    </svg>

    Back
  </BackButton>
);

export default Index;
