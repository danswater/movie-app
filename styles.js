import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: #f4f9ff;
  }
  .no-padding {
    padding: 0px;
  }
  .circle {
    width: 90px;
    height: auto;
    font-size: 1rem;
    border-radius: 500rem;
    display: inline-block;
    vertical-align: middle;
    margin-right: 25px;
    margin-bottom: 5px;
    float: left;
  }
`;
