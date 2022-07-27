import styled from 'styled-components';
import logoB from '../img/LogoYogaBlack.png';

export const HeroBody = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: url(${logoB});
  background-repeat: no-repeat;
  background-position: 150% 50%;
  background-size: 900px;
  `;

export const MainHero = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  gap: 20px;
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
    /* filter: sepia(0%); */
  }
`;

export const P = styled.div`
grid-area: text;
h1 {
  font-family: 'Cormorant SC', serif;
  font-size: 48px;
  line-height: 2;
  color: var(--g2);
  font-weight: 100;
  letter-spacing: 4px;
}
p {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  color: var(--g6);
  line-height: 1.5;
  font-weight: 300;
}
`;

export const Dev = styled.div`
  font-family: 'deva';
  font-size: 30px;
  font-weight: 100;
  /* letter-spacing: 4px; */
`;
