import logoGold from '../../img/LogoYogaGold.png';
import logoBlack from '../../img/LogoYogaBlack.png';

export const courseLight = {
  component: 'course',
  title: 'Cursos',
  color: 'var(--g12)', // font color
  background: 'var(--g3)', // background-color
  strong: 'var(--g1)', // contrast color
  logo: logoBlack,
  titleFonts: { // title properties
    fontSize: 48,
    fontWeight: 100,
    fontColor: 'g6',
    paddingBottom: 20,
  },
  p: { // paragraph properties
    fontSize: 32,
    fontWeight: 300,
    fontColor: 'g12',
  },
};

export const courseDark = {
  component: 'course',
  title: 'Cursos',
  color: 'var(--g3)', // font color
  background: 'var(--g11)', // background-color
  strong: 'var(--g1)', // contrast color
  logo: logoGold,
  titleFonts: {
    fontSize: 48,
    fontWeight: 100,
    fontColor: 'g6',
    paddingBottom: 20,
  },
  p: {
    fontSize: 32,
    fontWeight: 300,
    fontColor: 'g12',
  },
};
