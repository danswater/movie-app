import styled from 'styled-components';

export default styled.div`
  position: relative;
  height: 100%;
  margin-top: ${props => (props.marginTop ? '2rem' : '0')};
  margin-bottom: ${props => (props.marginBottom ? '2rem' : '0')};
  p {
    font-size: 20px;
  }
`;
