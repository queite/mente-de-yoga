import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const CursosMain = styled(BasicMain)`
  background-color: var(--g10);
`;

export const CursosContent = styled(BasicContent)`
  grid-template-columns: 6fr 1fr 5fr;
  grid-template-areas:
  "text space img";
  align-items: end;
`;

export const Text = styled.div`
    grid-area: text;
`;

export const Img = styled.div`
grid-area: img;
position: relative;
    img {
        filter: grayscale(1);
        width: 460px;
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

export const Button = styled.div`
    margin-top: 24px;
    font-family: 'Open Sans', sans-serif;
    color: var(--g2);
    border: 1px solid var(--d3);
    width: 160px;
    padding: 8px 0;
    text-align: center;
    border-radius: 4px;
`;
