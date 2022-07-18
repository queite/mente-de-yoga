import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logoB from '../img/LogoYogaBlack.png';

export const Body = styled.body.attrs((props) => ({ heigth: props.heigth || 'none' }))`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${(props) => props.color};
  margin: 0 auto;
  /* background-image: url(${logoB}); */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  /* background-size: 300px; */
  height: ${(props) => props.heigth};
`;

export const StyleBiMenu = styled(BiMenu)`
  color: var(--roxo-c-100);
  font-size: 40px;
`;

export const StyleLink = styled(Link)`
  align-self: center;
  font-size: 1em;
  color: var(--g1);
  text-decoration: none;
  padding: 5px;
  background-color: var(--v9);
  width: 100%;
  font-family: 'Open Sans', sans-serif;
`;
