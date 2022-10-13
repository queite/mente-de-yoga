// import { headerDark } from '../components/Header/HeaderInfos';
import { courseDark } from '../components/Course/CourseInfos';
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
    title: 'Mente de Yoga',
    background: 'var(--g11)',
    color: 'var(--g3)',
    logo: logoGold,
    titleFonts: {
      fontSize: 32,
      fontWeight: 300,
      fontColor: 'var(--g12)',
    },
  },
  course: courseDark,
};
