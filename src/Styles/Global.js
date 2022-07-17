import { createGlobalStyle } from 'styled-components';
import tama from '../fonts/01_tama.TTF';
import albuquerque from '../fonts/earwig.ttf';
import cube from '../fonts/cube_vol2.TTF';
import score from '../fonts/SCOREBOARD.ttf';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      --escuro: black;
      --claro: white;
      //verde claro
      --verde-claro-100: rgb(128, 211, 155);
      --verde-claro-90: rgb(128, 211, 155, 0.9);
      --verde-claro-80: rgb(128, 211, 155, 0.8);
      --verde-claro-70: rgb(128, 211, 155, 0.7);
      --verde-claro-60: rgb(128, 211, 155, 0.6);
      --verde-claro-50: rgb(128, 211, 155, 0.5);
      // verde escuro
      --verde-escuro-100: rgb(44, 110, 73);
      --verde-escuro-90: rgb(44, 110, 73, 0.9);
      --verde-escuro-80: rgb(44, 110, 73, 0.8);
      --verde-escuro-70: rgb(44, 110, 73, 0.7);
      --verde-escuro-60: rgb(44, 110, 73, 0.6);
      --verde-escuro-50: rgb(44, 110, 73, 0.5);
      // roxo claro| purple
      --roxo-claro-100: rgb(185, 184, 221);
      --roxo-claro-90: rgb(185,184,221, 0.9);
      --roxo-claro-80: rgb(185,184,221, 0.8);
      --roxo-claro-70: rgb(185,184,221, 0.7);
      --roxo-claro-60: rgb(185,184,221, 0.6);
      --roxo-claro-50: rgb(185,184,221, 0.5);
      // roxo escuro| purple
      --roxo-escuro-100: rgb(25, 11, 40);
      --roxo-escuro-90: rgb(25, 11, 40, 0.9);
      --roxo-escuro-80: rgb(25, 11, 40, 0.8);
      --roxo-escuro-70: rgb(25, 11, 40, 0.7);
      --roxo-escuro-60: rgb(25, 11, 40, 0.6);
      --roxo-escuro-50: rgb(25, 11, 40, 0.5);
      //amarelo escuro
      --amarelo-escuro-100: rgb(242, 164, 68);
      --amarelo-escuro-90: rgb(242, 164, 68, 0.9);
      --amarelo-escuro-80: rgb(242, 164, 68, 0.8);
      --amarelo-escuro-70: rgb(242, 164, 68, 0.7);
      --amarelo-escuro-60: rgb(242, 164, 68, 0.6);
      --amarelo-escuro-50: rgb(242, 164, 68, 0.5);
      //amarelo medio
      --amarelo-medio-100: rgb(242, 191, 94);
      --amarelo-medio-90: rgb(242, 191, 94, 0.9);
      --amarelo-medio-80: rgb(242, 191, 94, 0.8);
      --amarelo-medio-70: rgb(242, 191, 94, 0.7);
      --amarelo-medio-60: rgb(242, 191, 94, 0.6);
      --amarelo-medio-50: rgb(242, 191, 94, 0.5);
      //amarelo claro
      --amarelo-claro-100: rgb(242, 212, 121);
      --amarelo-claro-90: rgb(242, 212, 121, 0.9);
      --amarelo-claro-80: rgb(242, 212, 121, 0.8);
      --amarelo-claro-70: rgb(242, 212, 121, 0.7);
      --amarelo-claro-60: rgb(242, 212, 121, 0.6);
      --amarelo-claro-50: rgb(242, 212, 121, 0.5);
      // largura e altura
      --wid: 100vw; // largura
      --hei: 100vh; // altura  
    }

    @font-face {
      font-family: 'tama';
      src: url(${tama}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'albuquerque';
      src: url(${albuquerque}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'cube';
      src: url(${cube}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'score';
      src: url(${score}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }        

`;

export default Global;
