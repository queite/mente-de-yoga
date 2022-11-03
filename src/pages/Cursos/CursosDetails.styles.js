import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BasicContent } from '../../Styles/Generals';

export const CursosMain = styled.div`
  background-color: ${(props) => props.theme.cursoPage.background};
`;

export const TitleContent = styled(BasicContent)`
`;

export const LIcon = styled(AiFillCheckCircle)`
    color: var(--d5);
    margin-right: 12px;
    font-size: 12px;
`;

export const CursosContent = styled(BasicContent)`
/* background-color: ${(props) => props.theme.card.background}; */
  grid-template-columns: 6fr 6fr;
  grid-template-areas:
  "img text";
  align-items: end;
  margin: 40px auto;
  list-style-position: outside;

`;
export const GeneralInfos = styled.div`
  grid-area: text;
`;

export const CursosTitle = styled(BasicContent)`
margin-top: 40px;
`;

export const Img = styled.div`
grid-area: img;
position: relative;
    img {
        filter: grayscale(1);
        width: 500px;
        height: 400px;
        object-fit: cover;
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
