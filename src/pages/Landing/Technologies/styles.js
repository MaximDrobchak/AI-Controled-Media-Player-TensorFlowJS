import styled from 'styled-components';

export const TechnologiesGrid = styled.div`
  margin-top: 60px;
  display: grid;
  grid: repeat(2, 1fr) / repeat(4, 1fr);
  grid-gap: 2em;
`;
export const HeadText = styled.h3`
  font-size: 180%;
  line-height: 1.2;
  letter-spacing: 0.4px;
  text-align: center;
  color: #189af1;

  @media (max-width: 1095px) {
    font-size: 1em;
  }
`;
