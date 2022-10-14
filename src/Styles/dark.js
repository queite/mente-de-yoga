// import { headerDark } from '../components/Header/HeaderInfos';
// import { courseDark } from '../components/Course/CourseInfos';
import logoGold from '../img/LogoYogaGold.png';

export default {
  title: 'dark',
  general: {
    color: 'var(--g3)',
    background: 'var(--g11)',
    strong: 'var(--g2)',
    links: 'var(--g3)',
    borderLinks: 'var(--g11)',
  },
  header: {
    background: 'var(--g11)',
    color: 'var(--g3)',
    logo: logoGold,
    titleFonts: {
      fontSize: 32,
      fontWeight: 300,
      fontColor: 'var(--g3)',
    },
  },
  course: {
    background: 'var(--g11)',
    color: 'var(--g4)',
    strong: 'var(--g12)',
    titleFonts: {
      fontSize: 48,
      fontWeight: 100,
      fontColor: 'var(--g5)',
      paddingBottom: 20,
    },
    p: {
      fontSize: 24,
      fontWeight: 300,
      fontColor: 'var(--g4)',
    },
  },
};
