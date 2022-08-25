import styled from 'styled-components';
import logoB from '../../img/LogoYogaBlack.png';
// import yogaImage from '../../img/uns/yoga7.jpg';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const HeroMain = styled(BasicMain)`
  /* background-image: url(${logoB}); */
  background-image: url(${((props) => props.image)});
  background-repeat: no-repeat;
  /* background-position-y: -150px; */
  background-size: cover;
  background-position: center;
  /* background-size: 100%; */
  filter: grayscale(1);
  opacity: 90;
  `;

export const HeroContent = styled(BasicContent)`
  grid-template-columns: 7fr 1fr;
  grid-template-areas: 
  "text img";
  align-items: end;
  height: 350px;
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
