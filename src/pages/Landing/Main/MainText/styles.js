import styled from 'styled-components';

export const StyleTextBlock = styled.div`
  grid-area: 5 / 7 / 12 / 12;
  font-family: Roboto;
  font-size: 200%;
  line-height: 1.2;
  color: #189af1;
  & :nth-child(2) {
    font-family: Roboto;
    font-size: 280%;
    font-weight: 900;
    line-height: 1.21;
    letter-spacing: 350%;
    color: #ffffff;
  }
  & :nth-child(6) {
    position: relative;
  }
`;

export const MarginSpan = styled.p`margin: 2px;`;
