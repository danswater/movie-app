import styled from 'styled-components';

const ExtraContent = styled.div`
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border: none;
  background: 0 0;
  margin: 0;
  padding: 1em 1em 0 1em;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 1em;
  border-radius: 0;
  height: 3em;

  .header {
    font-weight: 700;
    font-size: 1.1em;
    margin-top: -.21425em;
    line-height: 1.28571429em;
  }



  max-width: 100%;
  min-height: 0!important;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  position: static;
  background: 0 0;
  width: auto;
  margin: 0 0;
  padding: .75em 1em;
  top: 0;
  left: 0;
  color: rgba(0,0,0,.4);
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: color .1s ease;
  transition: color .1s ease;
`;

export default ExtraContent;
