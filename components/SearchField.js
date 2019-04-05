import styled from 'styled-components';

const SearchField = styled.div`
  position: relative;
  font-weight: 400;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: rgba(0,0,0,.87);
  font-size: 1.1em;
  width: 100%;

  svg {
    cursor: default;
    position: absolute;
    line-height: 1;
    text-align: center;
    top: 0;
    right: auto;
    left: 12px;
    margin: 0;
    height: 100%;
    width: 1.3em;
    opacity: .5;
    border-radius: 0 .28571429rem .28571429rem 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
    border-radius: .28571429rem 0 0 .28571429rem;
    pointer-events: none;
  }

  input {
    margin: 0;
    max-width: 100%;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    outline: 0;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    text-align: left;
    line-height: 1.21428571em;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    padding: .67857143em 1em;
    background: #fff;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    border-radius: .28571429rem;
    -webkit-transition: border-color .1s ease,-webkit-box-shadow .1s ease;
    transition: border-color .1s ease,-webkit-box-shadow .1s ease;
    transition: box-shadow .1s ease,border-color .1s ease;
    transition: box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 100%;
    padding-left: 2.67142857em!important;

    &:focus {
      border-color: #85b7d9;
      background: #fff;
      color: rgba(0,0,0,.8);
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }
`;

export default SearchField;
