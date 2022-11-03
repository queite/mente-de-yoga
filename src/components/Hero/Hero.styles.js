import styled from 'styled-components';
// import logoB from '../../img/LogoYogaBlack.png';
// import yogaImage from '../../img/uns/yoga7.jpg';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const HeroMain = styled(BasicMain)`
  background-image: url(${((props) => props.image)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: grayscale(1);
  `;

export const HeroContent = styled(BasicContent)`
  height: 300px;
`;
