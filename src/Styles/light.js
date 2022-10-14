// import { headerLight } from '../components/Header/HeaderInfos';
// import { courseLight } from '../components/Course/CourseInfos';
import logoBlack from '../img/LogoYogaBlack.png';

export default {
  title: 'light',
  general: {
    color: 'var(--g3)',
    background: 'var(--g3)',
    strong: 'var(--g2)',
    links: 'var(--g12)',
    borderLinks: 'var(--g3)',
  },
  header: {
    background: 'var(--g3)',
    color: 'var(--g12)',
    logo: logoBlack,
    titleFonts: {
      fontSize: 32,
      fontWeight: 300,
      fontColor: 'var(--g12)',
    },
  },
  course: {
    background: 'var(--g3)',
    color: 'var(--g12)',
    strong: 'var(--g12)',
    titleFonts: {
      fontSize: 48,
      fontWeight: 100,
      fontColor: 'var(--g10)',
      paddingBottom: 20,
    },
    p: {
      fontSize: 24,
      fontWeight: 300,
      fontColor: 'var(--g9)',
    },
  },
};
