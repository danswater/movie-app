import styled from 'styled-components';

export default styled.div`
  position: relative;
  height: 100%;
  margin-top: ${props => (props.paddedTop ? '2rem' : '0')};
  p {
    font-size: 20px;
  }
`;
