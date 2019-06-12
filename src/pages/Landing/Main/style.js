import styled from 'styled-components';
import BackGroundIcon from './img/background-header.png';

export const Navigation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  flex-direction: column;
  margin-left: 1.7%;
  margin-top: 3.7%;
  padding-top: 18px;
  > a {
    margin-top: 25px;
    > img:hover {
      border: 7px solid red;
      }
    }
  }
`;
export const StyleMenuItem = styled.img`
  height: 50px;
  border: ${props =>

      props.target == props.linkID ? '5px solid #189af1' :
      ''};
`;
export const BackgroundMenu = styled.div`
  max-width: 99%;
  max-height: 90%;
  background: url('${BackGroundIcon}') no-repeat center;
  background-size: cover;
  position: relative;
`;
