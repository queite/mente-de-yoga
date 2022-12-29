/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import html from 'react-inner-html';
import {
  CursosContentAbout, CursosMain,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';
import prepare from '../../../helpers/paragrafos';

const texto = [
  'Apesar de que as origens do /Yoga se perdem na antiguidade, sua primeira forma estruturada surge com /Patañjali entre os anos de 200AEC e 200EC. Ele trouxe unidade ao /Yoga. Todo o conhecimento sobre o /Yoga disponível na época, que estava disperso, foi apresentado com coesão e com maestria na forma de um método claro através do /Yoga /Sūtra.',
  '/Patañjali foi, portanto, um compilador e sistematizador para o /Yoga. Sobre ele quase nada se sabe, se era um homem ou uma mulher, ou se o nome /Patañjali era apenas um pseudônimo para um grupo de yoges, o que é provável. Sabe-se com certeza que era um profundo conhecedor do /Yoga e de outras tradições. Seu sistema foi tão bem estruturado que o Yoga passou a ser reconhecido com um dos 6 /Darśanas, um dos 6 pontos de vistas considerados em concordância com a tradição Védica.',
  '/Patañjali foi tão importante que a partir dele podemos dizer com clareza o que é /Yoga e o que não é /Yoga.',
  'O /Yoga está intimamente relacionado a palavra /anuśāsana, que deriva das palavras /anu e /śāsana. /Śasana significa <i>método</i> e /anu significa <i>conectado com</i>. Ou seja, /Yoga é um método conectado com aqueles sábios antigos e professores que vieram antes, é um método que se formou ao longo das eras, transmitido de professor para aluno, que foi finalmente compilado por /Patañjali.',
  'Como método ele é um caminho para se atingir um fim, tem etapas, tem disciplinas, tem metas, tem critérios e meios para medir a evolução e nos manter nesta evolução. /Yoga nos ensina sobre a mente humana, sobre o sofrimento da vida humana, sobre o que nos faz sofrer; nos ensina sobre o que nos impede de sair do sofrimento e também oferece meios para sair deste sofrimento e residir na felicidade.',
  'Das diversas formas atuais de /Yoga, possivelmente uma das que se mantm mais fiel aos ensinamentos dos sábios antigos é o /Haṭha /Yoga.'];

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
        <p {...html(paragrafos[4])} />
        <p {...html(paragrafos[5])} />
      </CursosContentAbout>
    </CursosMain>
  );
}
