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
    button: {
      borderRadius: 4,
    },
  },
  card: {
    color: 'var(--g10)',
    background: 'var(--g10)',
  },
  header: {
    background: 'var(--g11)',
    color: 'var(--g3)',
    logo: logoGold,
    Hfonts: {
      // fontSize: 48,
      fontWeight: 100,
      fontColor: 'var(--g4)',
      paddingBottom: 0,
    },
    Pfonts: {
      fontSize: 24,
      fontWeight: 300,
      fontColor: 'var(--g4)',
    },
  },
  course: {
    background: 'var(--g11)',
    color: 'var(--g4)',
    strong: 'var(--g1)',
    Hfonts: {
      // fontSize: 48,
      fontWeight: 100,
      fontColor: 'var(--g4)',
      paddingBottom: 20,
    },
    Pfonts: {
      fontSize: 24,
      fontWeight: 300,
      fontColor: 'var(--g4)',
    },
    button: {
      // fontSize: 16,
      fontColor: 'var(--g4)',
      backColor: 'var(--g11)',
      borderColor: 'var(--d3)',
      margin: [24, 0, 0, 0],
    },
  },
  formationComponent: {
    background: 'var(--g3)',
    color: 'var(--g12)',
    strong: 'var(--g12)',
    Hfonts: {
      // fontSize: 48,
      fontWeight: 100,
      fontColor: 'var(--g1)',
      paddingBottom: 20,
    },
    Pfonts: {
      // fontSize: 48,
      fontWeight: 100,
      fontColor: 'var(--g1)',
      paddingBottom: 20,
    },
    button: {
      // fontSize: 16,
      fontColor: 'var(--g9)',
      backColor: 'var(--g3)',
      borderColor: 'var(--d3)',
      margin: [24, 0, 0, 0],
    },
  },
  footer: {
    background: 'var(--g12)',
    color: 'var(--g12)',
    logo: logoGold,
    titleFonts: {
      fontSize: 32,
      fontWeight: 300,
      fontColor: 'var(--g12)',
    },
  },
  adminPageConfigs: {
    background: 'var(--g12)',
    color: 'var(--g3)',
    button: {
      // fontSize: 16,
      fontColor: 'var(--g9)',
      backColor: 'var(--g3)',
      borderColor: 'var(--g3)',
      margin: [0, 12, 0, 0],
    },
    p: {
      fontSize: 24,
      fontWeight: 300,
      fontColor: 'var(--g4)',
    },
  },
  alunosPage: {
    button: {
      // fontSize: 16,
      fontColor: 'var(--g9)',
      backColor: 'var(--g3)',
      borderColor: 'var(--g3)',
      margin: [0, 0, 0, 0],
    },
  },
  cursoPage: {
    background: 'var(--g11)',
    color: 'var(--g4)',
    strong: 'var(--g1)',
    Hfonts: {
      fontWeight: 100,
      fontColor: 'var(--g4)',
      paddingBottom: 20,
    },
    Pfonts: {
      fontSize: 24,
      fontWeight: 300,
      fontColor: 'var(--g4)',
    },
    button: {
      // fontSize: 16,
      fontColor: 'var(--g4)',
      backColor: 'var(--g11)',
      borderColor: 'var(--d3)',
      margin: [24, 0, 0, 0],
    },
  },
};
