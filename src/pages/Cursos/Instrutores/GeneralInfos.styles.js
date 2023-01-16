import styled from 'styled-components';
import { BasicContent } from '../../../Styles/Generals';

export const CursosContent = styled(BasicContent)`
/* background-color: ${(props) => props.theme.card.background}; */
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-template-areas:
  "img text";
  align-items: center;
  margin: 40px auto;
  list-style-position: outside;

  @media only screen and (max-width: 390px) {
    grid-template-columns: 1fr;
    /* grid-template-areas: "text"; */
    /* background-color: red; */
  }
`;

export const GeneralInfos = styled.div`
  grid-area: text;
  p {
    margin: 12px 0 12px 0;
  }
`;

export const Img = styled.div`
  grid-area: img;
    img {
        width: 500px;
        height: 350px;
        object-fit: cover;
        @media only screen and (max-width: 390px) {
          display: none;
        }
    }
`;
