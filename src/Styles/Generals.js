import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

export const Body = styled.body.attrs((props) => ({ heigth: props.heigth || 'none' }))`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: var(--roxo-claro-50);
  margin: 0 auto;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 300px;
  height: ${(props) => props.heigth};
`;

export const StyleBiMenu = styled(BiMenu)`
  color: var(--roxo-c-100);
  font-size: 40px;
`;

export const StyleLink = styled(Link)`
  align-self: center;
  font-size: 1em;
  color: black;
  text-decoration: none;
  padding: 5px;
`;
