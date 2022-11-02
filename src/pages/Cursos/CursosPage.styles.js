import styled from 'styled-components';
import { BasicContent } from '../../Styles/Generals';

export const CursosMain = styled.div`
  background-color: ${(props) => props.theme.cursoPage.background};
`;

export const TitleContent = styled(BasicContent)`
`;

export const CursosContent = styled(BasicContent)`
background-color: ${(props) => props.theme.card.background};
  grid-template-columns: 6fr 1fr 3fr;
  grid-template-areas:
  "text space img";
  align-items: end;
  margin: 40px auto;
  /* background-color: red; */
  padding: 20px;
  border-radius: 8px;
  /* -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.75); */
/* -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.75); */
  box-shadow: 4px 4px 12px 4px rgba(0,0,0,0.75);
`;

export const Text = styled.div`
    grid-area: text;
`;

export const Img = styled.div`
grid-area: img;
position: relative;
    img {
        filter: grayscale(1);
        width: 360px;
        /* height: 300px */
        /* position: relative; */
    }
    div {
        position: absolute;
        border-bottom: 5px dotted var(--laranja);
        border-left: 5px dotted var(--laranja);        
        width: 50%;
        height: 30%;
        bottom: -3px;
        left: -5px;
    }
`;
