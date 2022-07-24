import styled from 'styled-components';

export const HeroBody = styled.div`
  background-color: var(--g12);
  padding-top: 60px;
  padding-bottom: 60px;
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
  }
`;

export const P = styled.div`
grid-area: text;
h1 {
  font-family: 'Cormorant SC', serif;
  font-size: 48px;
  line-height: 2;
  color: var(--g2);
  font-weight: 300;
}
p {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  color: var(--g6);
  line-height: 1.5;
  font-weight: 300;
}
`;
