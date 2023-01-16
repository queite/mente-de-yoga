import styled from 'styled-components';
import { BasicContent } from '../../../Styles/Generals';

export const CursosContent = styled(BasicContent)`
  grid-template-columns: 6fr 6fr;
  grid-template-areas:
  "text img";
  align-items: center;
  margin: 0px auto;
  list-style-position: outside;
  /* background-color: red; */
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
            "text" "img"  ;
  }
`;

export const Img = styled.div`
  grid-area: img;
/* position: relative; */
    img {
        /* filter: grayscale(1); */
        width: 500px;
        height: 350px;
        object-fit: cover;
        /* position: relative; */
        @media screen and (max-width: 600px) {
          /* display: none; */
          width: 100%;
        }
    }
    /* div {
        position: absolute;
        border-bottom: 5px dotted var(--laranja);
        border-left: 5px dotted var(--laranja);        
        width: 50%;
        height: 30%;
        bottom: -3px;
        left: -5px;
    } */
`;
