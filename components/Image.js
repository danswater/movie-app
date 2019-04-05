import styled from 'styled-components';

const Image = styled.img`
  margin-right: 0;
  margin-bottom: 1em;
  margin-left: 1em;
  width: ${props => (props.width ? `${props.width}px` : '315px')};
  float: ${props => (props.floatRight ? 'right' : 'none')};
  height: auto;
`;

export default Image;
