/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import html from 'react-inner-html';
import { CursosContentAbout, CursosMain } from './CursosDetails.styles';
import { CursosContent, Img } from './HathaYoga.styles';
import * as T from '../../../Styles/texts';
import getImage from '../../../helpers/helpers';
import prepare from '../../../helpers/paragrafos';

const texto = [
  'O /Haṭha /Yoga surge através de um grupo de yogis chamados /Siddhas. A palavra /Siddha significa realizado, é uma referência aos yoguis que já concluíram os objetivos do /Yoga, aqueles que já se aperfeiçoaram até a realização máxima, que possuem todos os tipos de poderes e que já transmutaram as impurezas do corpo, da mente e do mundo da matéria. Dentre os /Siddhas existiam os /Nathas, e dentre estes existia yogi /Matsyendra , um pescador.',
  '/Matsyendra foi escolhido por /Śiva para receber os ensinamentos do /Haṭha /Yoga e por transmiti-los ao mundo. Por 12 anos ele se dedicou exclusivamente às práticas que lhe foram transmitidas diretamente, de professor para aluno. No final desse período, quando o treinamento se encerrou. /Matsyendra, o senhor dos peixes, surge como um mestre totalmente realizado no /Haṭha /Yoga com a função de disseminá-lo pelo mundo.',
  '/Matsyendra ensina /Goraksha, e desta forma, de professor para aluno, o conhecimento do /Haṭha /Yoga chega até /Svātmārāma que, por volta o séc XV, organiza todo o conhecimento desta linhagem no texto /Haṭha /Yoga /Pradīpikā permitindo assim que este conhecimento alcançasse uma dimensão ainda maior.',
  'A palavra /Haṭha significa força. É uma referência as gigantes força e obstinação necessárias para equilibrar as energias internas de /Ha e /Ṭha , do sol e da lua, da contração e do relaxamento, dos sistemas nevosos simpático e parasimpático, dos fluxos de /prāṇa que ocorrem em /piṇgalā /nāḍī e /iḍā /nāḍī; a união entre /Śiva e /Śakti.'];

// eslint-disable-next-line react/prop-types
export default function HathaYoga({ back }) {
  const [paragrafos, setParagrafos] = useState([]);
  useEffect(() => {
    setParagrafos(prepare(texto));
  }, []);
  return (
    <CursosMain back={back}>
      <CursosContentAbout>

        {/* ----------------------------------------------------------------- */}
        {/* HATHA YOGA */}
        {/* ----------------------------------------------------------------- */}

        <T.H3 detach>O Haṭha yoga</T.H3>
        <T.Cita>
          <T.Sk>
            śrīādināthāya namo’stu tasmai yenopadiṣṭā haṭhayogavidyā |
            <br />
            vibhrājate pronnatarājayogam āroḍhumicchoradhirohiṇīva ||
          </T.Sk>
          <T.Sk>
            Saudações ao glorioso primeiro, Śrī Ādināth,
            que instruiu o conhecimento do haṭha yoga
            <br />
            que brilha como uma escada para aqueles que desejam ascender ao
            estágio mais alto do yoga, o rāja yoga.
          </T.Sk>
        </T.Cita>
        <p {...html(paragrafos[0])} />
        <p {...html(paragrafos[1])} />
        <p {...html(paragrafos[2])} />
        <p {...html(paragrafos[3])} />

        {/* ----------------------------------------------------------------- */}
        {/* BENEFICIOS */}
        {/* ----------------------------------------------------------------- */}

        <h4>
          O que você ganha com a prática integral de Haṭha Yoga:
        </h4>
      </CursosContentAbout>
      <CursosContent>
        <ul>
          <li>
            <T.LIcon />
            Com as práticas de
            <skr> kriyās </skr>
            você elimina as impurezas do corpo, ganhando
            <skr> śodhana </skr>
            , pureza e saúde.
          </li>
          <li>
            <T.LIcon />
            Com as práticas de
            <skr> āsanas </skr>
            você elimina a fraqueza do corpo, ganhando
            <skr> dṛḍhatā </skr>
            , força, solidez e durabilidade.
          </li>
          <li>
            <T.LIcon />
            Com as práticas de
            <skr> mudrā </skr>
            você elimina a instabilidade, ganhando
            <skr> sthairya </skr>
            , estabilidade, constância e permanência.
          </li>
          <li>
            <T.LIcon />
            Com as práticas de
            <skr> pratyāhāra </skr>
            você elimina a impaciência e a ansiedade, ganhando
            <skr> dhairya </skr>
            , calma, paciência, tranquiliade, suavidade e determinação.
          </li>
          <li>
            <T.LIcon />
            Com as práticas de
            <skr> prāṇāyāma </skr>
            você elimina a densidade, a depressão e a dureza, ganhando
            <skr> lāghava </skr>
            , vitalidade, luz, leveza e destreza.
          </li>
          <li>
            <T.LIcon />
            Com as práticas de
            <skr> dhyāna </skr>
            você elimina a dispersão e as ilusões, ganhando
            <skr> pratyakṣa </skr>
            , foco, percepção correta e unidirecionamento da mente.
          </li>
          <li>
            <T.LIcon />
            Alcançando
            <skr> samādhi </skr>
            você ganha
            <skr> nirlipta </skr>
            , libertação.
          </li>
        </ul>
        <Img>
          <img src={getImage('general')} alt="hatha" />
        </Img>
      </CursosContent>
    </CursosMain>
  );
}
