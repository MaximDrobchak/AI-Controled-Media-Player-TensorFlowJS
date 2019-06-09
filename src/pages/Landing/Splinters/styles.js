import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px 0 0 23.2%;
  width: 72.2%;
  height: 393px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

export const Image = styled.img`
  position: relatyve;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  margin-top: ${props => props.top};
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
  margin-bottom: ${props => props.bottom};
`;
