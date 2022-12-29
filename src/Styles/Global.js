import { createGlobalStyle } from 'styled-components';
// import deva from './fonts/deva.ttf';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    /* list-style: none */
  }
  :root {
      --escuro: black;
      --claro: white;
      //verde
      --v1: rgba(201, 235, 255, 1);
      --v2: rgba(198, 255, 255, 1);
      --v3: rgba(176, 255, 231, 1);
      --v4: rgba(143, 236, 208, 1);
      --v5: rgba(98, 189, 162, 1);
      --v6: rgba(73, 155, 130, 1);
      --v7: rgba(52, 133, 109, 1);
      --v8: rgba(38, 115, 92, 1);
      --v9: rgba(20, 84, 65, 1);
      --v10: rgba(6, 46, 34, 1);
      // marrom
      --m1: rgba(255, 202, 187, 1);
      --m2: rgba(232, 164, 146, 1);
      --m3: rgba(192, 124, 105, 1);
      --m4: rgba(156, 91, 73, 1);
      --m5: rgba(129, 66, 49, 1);
      --m6: rgba(91, 39, 25, 1);
      --m7: rgba(63, 22, 11, 1);
      // dourado
      --laranja: rgba(255, 125, 0, 1);
      --d1: rgba(255, 184, 132, 1);
      --d2: rgba(250, 143, 97, 1);
      --d3: rgba(214, 117, 65, 1);
      --d4: rgba(178, 91, 44, 1);
      --d5: rgba(165, 76, 29, 1);
      --d6: rgba(146, 71, 17, 1);
      --d7: rgba(120, 61, 6, 1);
      //cinza
      --g1: rgba(242, 242, 242, 1);
      --g2: rgba(240, 237, 235, 1);
      --g3: rgba(220, 224, 222, 1);
      --g4: rgba(200, 204, 202, 1);
      --g5: rgba(180, 184, 182, 1);
      --g6: rgba(200, 204, 202, 1);
      --g6: rgba(160, 163, 162, 1);
      --g7: rgba(120, 122, 121, 1);
      --g8: rgba(100, 102, 101, 1);
      --g9: rgba(80, 82, 81, 1);
      --g10: rgba(60, 61, 61, 1);
      --g11: rgba(40, 41, 40, 1);
      --g12: rgba(20, 20, 20, 1);
      // largura e altura
      --wid: 100vw; // largura
      --hei: 100vh; // altura  
      
      scroll-behavior: smooth;
    }
    // Fontes
    h1, h2, h3, h4 {
      font-family: 'Cormorant SC', serif;
      color: ${(props) => props.theme.general.color.title};
      font-weight: ${(props) => props.theme.general.fontWeight};
      /* margin: 28px 0; */
      padding: 8px 0;
    }
    p, p1, p2 {
      font-family: 'Open Sans', sans-serif;
      color: ${(props) => props.theme.general.color.paragraph};
      font-weight: ${(props) => props.theme.general.fontWeight};
    }
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 36px;
    }
    h3 {
      font-size: 28px;
    }
    h4 {
      font-size: 24px;
    }
    p1 {
      font-size: 24px;
    }
    p2 {
      font-size: 20px;
    }
    li {
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      list-style-type: none;
    }
    ul {
      margin: 4px 0 8px 24px;
    }
    skr {
      font-family: 'Special Elite', cursive;
      font-size: 1em;
      font-weight: 500;
    }
    str {
      font-weight: 700;
      color: var(--g12);
    }
`;

export default Global;
