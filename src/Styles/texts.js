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
  const data = type === 'H' ? info.Hfonts : info.Pfonts;
  return data;
}

function typoStrong(infos, type) {
  const data = getContextInfos(infos, type);
  const ret = css`
  color: ${data.strong};
  `;
  return ret;
}

export const St = styled.strong`
    font-weight: 700;
    ${(props) => typoStrong(props.infos, 'strong')}
`;

function fontProp(infos, type) { // pagina , H ou P
  const data = getContextInfos(infos, type);
  const {
    fontColor, backColor, fontWeight, lineHeight, paddingBottom,
  } = data;
  const ret = css`
  color: ${fontColor};
  background-color: ${backColor || null};
  font-weight: ${fontWeight};
  line-height: ${lineHeight || null};
  padding-bottom: ${paddingBottom}px;
  `;
  return ret;
}

function detach() {
  const ret = css`
    border: 1px solid var(--d6);
    padding: 4px;
    border-radius: 8px;
    margin-bottom: 8px;
  `;
  return ret;
}

export const H1 = styled.h1`
  font-family: 'Cormorant SC', serif;
  font-size: 48px;
  ${(props) => fontProp(props.infos, 'H')}
  ${(props) => props.detach && detach()}
`;

export const P1 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  ${(props) => fontProp(props.infos, 'P')}
  ${(props) => props.detach && detach()}
`;

export const H2 = styled.h2`
  font-family: 'Cormorant SC', serif;
  font-size: 36px;
  ${(props) => fontProp(props.infos, 'H')}
  ${(props) => props.detach && detach()}
`;

export const P2 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  ${(props) => fontProp(props.infos, 'P')}
  ${(props) => props.detach && detach()}
`;

export const H3 = styled.h3`
  font-family: 'Cormorant SC', serif;
  font-size: 28px;
  ${(props) => fontProp(props.infos, 'H')}
  ${(props) => props.detach && detach()}
`;

export const P3 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  ${(props) => fontProp(props.infos, 'P')}
  ${(props) => props.detach && detach()}
`;

export const H4 = styled.h3`
  font-family: 'Cormorant SC', serif;
  font-size: 20px;
  ${(props) => fontProp(props.infos, 'H')}
  ${(props) => props.detach && detach()}
`;

export const Li = styled.li`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  list-style-type: none;
  ${(props) => fontProp(props.infos, 'P')}
`;
