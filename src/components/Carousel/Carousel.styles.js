import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const CarouselMain = styled(BasicMain)`
  background-color: var(--g3);
  `;

export const CarouselContent = styled(BasicContent)`
    grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "posts coments";
`;

export const Div = styled.div`
    grid-area: posts;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
