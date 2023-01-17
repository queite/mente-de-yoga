import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const AboutMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.adminPageConfigs.background};
`;

export const AboutContent = styled(BasicContent)`
  margin: 40px auto;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "img text";
  align-items: end;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Img = styled.div`
  grid-area: img;
    img {
        width: 400px;
        height: 500px;
        object-fit: cover;
        @media screen and (max-width: 600px) {
          display: none;
        }
      }
`;

export const GeneralInfos = styled.div`
  grid-area: text;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
