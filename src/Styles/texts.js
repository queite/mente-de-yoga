/* eslint-disable no-confusing-arrow */
/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

function typo(infos) {
  const allInfos = useContext(ThemeContext);
  const componentInfos = Object.entries(allInfos).find((pair) => pair[0] === infos);
  const infoTitle = componentInfos[1];
  const ret = css`
  font-size : ${infoTitle.titleFonts.fontSize}px;
  font-weight: ${infoTitle.titleFonts.fontWeight};
  color: var(--${infoTitle.titleFonts.fontColor});
  background-color: ${infoTitle.titleFonts.backColor || null};
  line-height: ${infoTitle.titleFonts.lineHeight || null};
  padding-bottom: ${infoTitle.titleFonts.paddingBottom}px;
  `;
  return ret;
}

export const Title = styled.p`
  font-family: 'Cormorant SC', serif;
  ${(props) => typo(props.infos)}
`;

export const P = styled.p`
    font-family: 'Open Sans', sans-serif;
    ${(props) => typo(props.infos)}
`;

export const St = styled.strong`
    font-weight: 700;
    color: ${(props) => props.theme.general.strong};
`;
