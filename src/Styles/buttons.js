import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

function getContextInfos(infos) {
  const allInfos = useContext(ThemeContext);
  const componentInfos = Object.entries(allInfos).find((pair) => pair[0] === infos);
  const info = componentInfos[1];
  return info.button;
}

function fontProperties(infos) {
  const data = getContextInfos(infos);
  const {
    fontColor, borderColor, backColor, margin,
  } = data;
  const ret = css`
    color: ${fontColor};
    border-color: ${borderColor};
    background-color: ${backColor};
    margin: ${margin[0]}px  ${margin[1]}px  ${margin[1]}px  ${margin[3]}px;
  `;
  return ret;
}

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    padding: 0.5em 1em;
    border-radius: ${(props) => props.theme.general.button.borderRadius}px;
    border: 1px solid;
    font-weight: 500;
    cursor: pointer;
    ${(props) => fontProperties(props.infos)}
`;
