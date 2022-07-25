/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import hathaImg from '../img/uns/yoga4.jpg';

const Body = styled.body`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: var(--g10);
`;

const MainCursos = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  gap: 20px;
  grid-template-columns: 6fr 1fr 5fr;
  grid-template-areas:
  "text sp img";
  align-items: end;
`;
const H1 = styled.h1`
    color: var(--g11);
    font-size: 96px;
    font-family: 'Cormorant SC', serif;
    font-weight: 300;
`;

// const St = styled.p`
//     color: red;
// `;

const Text = styled.div`
    grid-area: text;
    p {
        font-family: 'Open Sans', sans-serif;
        color: var(--g5);
        line-height: 1.5;
        font-size: 20px;
    }
`;

const St = styled.strong`
    font-weight: 700;
    color: var(--g1);
`;

const Img = styled.div`
grid-area: img;
position: relative;
    img {
        width: 460px;
        /* position: relative; */
    }
    div {
        position: absolute;
        border-bottom: 5px dotted var(--d3);
        border-left: 5px dotted var(--d3);        
        width: 50%;
        height: 30%;
        bottom: -3px;
        left: -5px;
    }
`;

const Button = styled.div`
    margin-top: 24px;
    font-family: 'Open Sans', sans-serif;
    color: var(--g2);
    border: 1px solid var(--d3);
    width: 160px;
    padding: 8px 0;
    text-align: center;
    border-radius: 4px;
`;

export default function Cursos() {
  return (
    <Body>
      <MainCursos>
        <Text>
          <H1>
            Cursos
          </H1>
          <p>
            Com abordagem no
            <St> Haṭha Yoga </St>
            o curso de
            <St> Formação de Instrutores </St>
            conta com uma carga horária de
            <St> 200h </St>
            e destina-se a todo tipo de pessoa interessada em conhecer mais à si mesma, em conhecer e ensinar esta tradição.
          </p>
          <Button>SAIBA MAIS . . .</Button>
        </Text>
        <Img>
          <img src={hathaImg} alt="hatha" />
          <div />
        </Img>
      </MainCursos>
    </Body>
  );
}
