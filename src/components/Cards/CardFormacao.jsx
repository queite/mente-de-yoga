import React from 'react';
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import { CardContent, Text, Img } from './CardComponent.styles';
import * as T from '../../Styles/texts';
import hathaImg from '../../data/imagesHero';
// import { Button } from '../../Styles/buttons';

export default function CardFormacao() {
  // const comentarySmall = comentary.substring(0, 290).concat(' ', '...');
  // const navigate = useNavigate();
  const c = 'card';
  const getImage = () => {
    const num = Math.floor(Math.random() * (6));
    const image = Object.values(hathaImg)[num];
    return image;
  };
  return (
    <CardContent>
      <Text>
        <T.H2 infos={c}>FORMAÇÃO DE INSTRUTORES</T.H2>
        <T.P2 infos={c}>
          Com abordagem no
          <T.St infos={c}> Haṭha Yoga </T.St>
          o curso de
          <T.St infos={c}> Formação de Instrutores </T.St>
          conta com uma carga horária de
          <T.St infos={c}> 200h </T.St>
          e destina-se a toda pessoa interessada em conhecer mais à si mesma,
          e também em conhecer e ensinar esta tradição.
        </T.P2>
        {/* <Button
          infos={c}
          onClick={() => navigate('/cursos')}
        >
          Saiba mais ...
        </Button> */}
      </Text>
      <Img>
        <img src={getImage()} alt="hatha" />
        <div />
      </Img>
    </CardContent>
  // </BasicLink>

  );
}
