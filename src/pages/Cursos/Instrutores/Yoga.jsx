/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import html from 'react-inner-html';
import {
  CursosContentAbout, CursosMain,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';
import prepare from '../../../helpers/paragrafos';

const texto = [
  'Apesar de que as origens do /Yoga se perdem na antiguidade, sua primeira forma estruturada surge com /Patañjali entre os anos de 200AEC e 200EC. Ele trouxe unidade ao /Yoga. Todo o conhecimento sobre o /Yoga disponível na época, que estava disperso, foi apresentado com coesão e com maestria na forma de uma metodologia clara através do /Yoga /Sūtra.',
  '/Patañjali foi, portanto, um compilador e sistematizador para o /Yoga. Sobre ele quase nada se sabe, se era um homem ou uma mulher, ou se o nome /Patañjali era apenas um pseudônimo para um grupo de yoges, o que é provável. Sabe-se com certeza que era um profundo conhecedor do /Yoga e de outras tradições. Seu sistema foi tão bem estruturado que o Yoga passou a ser reconhecido com um dos 6 /Darśanas, um dos 6 pontos de vistas considerados em concordância com a tradição Védica.',
  '/Patañjali foi tão importante que a partir dele podemos dizer com clareza o que é /Yoga e o que não é /Yoga.',
  '/Yoga é uma metodologia, um método,'];

// eslint-disable-next-line react/prop-types
export default function Yoga({ back }) {
  const [paragrafos, setParagrafos] = useState([]);
  useEffect(() => {
    setParagrafos(prepare(texto));
  }, []);
  return (
    <CursosMain back={back}>
      <CursosContentAbout>
        <T.H3 detach>O yoga</T.H3>
        <T.Cita>
          <T.Sk>
            yogāṅgānuṣṭhānād aśuddhi kṣaye jñana dīptir ā viveka khyāteḥ ||
          </T.Sk>
          <T.Sk>
            Através da prática de todos os componentes do Yoga, tendo destruído
            as impurezas da mente, firme na visão do discernimento, surge o brilho
            da realidade espiritual.
          </T.Sk>
        </T.Cita>
        <p {...html(paragrafos[0])} />
        <p {...html(paragrafos[1])} />
        <p {...html(paragrafos[2])} />
        <p {...html(paragrafos[3])} />
      </CursosContentAbout>
    </CursosMain>
  );
}
