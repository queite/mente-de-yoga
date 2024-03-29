import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const CursosMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.course.background};
`;

export const TitleContent = styled(BasicContent)`
`;

export const CursosContent = styled(BasicContent)`
  grid-template-columns: 5fr 6fr;
  grid-template-areas:
  "img text";
  align-items: end;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
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
        width: 100%;
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
