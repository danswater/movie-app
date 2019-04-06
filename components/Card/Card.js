import styled from 'styled-components';

const Card = styled.div`
  margin: 1em 0;
  max-width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  border-radius: .28571429rem;
  -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  -webkit-transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease,-webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  margin: 0 auto;
  margin-bottom: 15px !important;

  &:first-child {
    border-radius: .28571429rem .28571429rem 0 0!important;
    border-top: none!important;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Card;
