import styled from 'styled-components';

const Image = styled.img`
  margin-right: 0;
  margin-bottom: 1em;
  text-align: center;
  width: 100%;
  float: ${props => (props.floatRight ? 'right' : 'none')};
  height: auto;
`;

export default Image;
