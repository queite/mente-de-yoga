/* eslint-disable no-confusing-arrow */
/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

function getContextInfos(infos, type) {
  const allInfos = useContext(ThemeContext);
  const componentInfos = Object.entries(allInfos).find((pair) => pair[0] === infos);
  const info = componentInfos[1];
  if (type === 'strong') {
    const data = info;
    return data;
  }
  const data = type === 'title' ? info.titleFonts : info.p;
  return data;
}

function fontProperties(infos, type) {
  const data = getContextInfos(infos, type);
  const {
    fontSize, fontWeight, fontColor, backColor, lineHeight, paddingBottom,
  } = data;
  const ret = css`
  font-size : ${fontSize}px;
  font-weight: ${fontWeight};
  color: ${fontColor};
  background-color: ${backColor || null};
  line-height: ${lineHeight || null};
  padding-bottom: ${paddingBottom}px;
  `;
  return ret;
}

function typoStrong(infos) {
  const info = getContextInfos(infos);
  const ret = css`
  color: ${info.strong};
  `;
  return ret;
}

export const Title = styled.p`
  font-family: 'Cormorant SC', serif;
  ${(props) => fontProperties(props.infos, 'title')}
`;

export const P = styled.p`
    font-family: 'Open Sans', sans-serif;
    ${(props) => fontProperties(props.infos, 'p')}
`;

export const St = styled.strong`
    font-weight: 700;
    ${(props) => typoStrong(props.infos, 'strong')}
`;
