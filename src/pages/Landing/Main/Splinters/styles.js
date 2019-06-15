import styled from 'styled-components';

export const Container = styled.div`
  grid-area: 4 / 6 / 13 / 13;
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
