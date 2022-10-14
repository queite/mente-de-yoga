/* eslint-disable no-confusing-arrow */
/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

function getContextInfos(infos) {
  const allInfos = useContext(ThemeContext);
  const componentInfos = Object.entries(allInfos).find((pair) => pair[0] === infos);
  const info = componentInfos[1];
  return info;
}

function typoTitle(infos) {
  const info = getContextInfos(infos);
  const ret = css`
  font-size : ${info.titleFonts.fontSize}px;
  font-weight: ${info.titleFonts.fontWeight};
  color: ${info.titleFonts.fontColor};
  background-color: ${info.titleFonts.backColor || null};
  line-height: ${info.titleFonts.lineHeight || null};
  padding-bottom: ${info.titleFonts.paddingBottom}px;
  `;
  return ret;
}

function typoP(infos) {
  const info = getContextInfos(infos);
  const ret = css`
  font-size : ${info.p.fontSize}px;
  font-weight: ${info.p.fontWeight};
  color: ${info.p.fontColor};
  background-color: ${info.p.backColor || null};
  line-height: ${info.p.lineHeight || null};
  padding-bottom: ${info.p.paddingBottom}px;
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
  ${(props) => typoTitle(props.infos)}
`;

export const P = styled.p`
    font-family: 'Open Sans', sans-serif;
    ${(props) => typoP(props.infos)}
`;

export const St = styled.strong`
    font-weight: 700;
    ${(props) => typoStrong(props.infos)}
`;
