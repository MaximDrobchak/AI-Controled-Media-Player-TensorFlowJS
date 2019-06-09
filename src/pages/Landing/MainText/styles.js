import styled from 'styled-components';

export const StyleTextBlock = styled.div`
  position: relative;
  width: 293px;
  height: 42px;
  font-family: Roboto;
  font-size: 35px;
  line-height: 1.2;
  color: #189af1;
  margin-left: 47%;
  top: 200px;
  & :nth-child(2) {
    width: 523px;
    height: 85px;
    font-family: Roboto;
    font-size: 70px;
    font-weight: 900;
    line-height: 1.21;
    letter-spacing: 3.5px;
    color: #ffffff;
  }
  & :nth-child(6) {
    position: relative;
    top: 70px;
  }
`;

export const MarginSpan = styled.p`
  margin: 2px;
  white-space: nowrap;
`;
