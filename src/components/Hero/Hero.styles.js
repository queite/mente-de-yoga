import styled from 'styled-components';
import logoB from '../../img/LogoYogaBlack.png';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const HeroMain = styled(BasicMain)`
  background-image: url(${logoB});
  background-repeat: no-repeat;
  background-position: 150% 50%;
  background-size: 900px;
  `;

export const HeroContent = styled(BasicContent)`
  grid-template-columns: 3fr 8fr;
  grid-template-areas: 
  "img text";
  align-items: end;
`;

export const Img = styled.div`
grid-area: img;
  img { 
    width: 280px;
    border-radius: 4px;
  }
`;

export const GridP = styled.div`
grid-area: text;
`;
