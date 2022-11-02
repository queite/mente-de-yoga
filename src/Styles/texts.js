/* eslint-disable no-confusing-arrow */
/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
// import titles from "../Styles/titles";

function getContextInfos(infos, type) {
  const allInfos = useContext(ThemeContext);
  const componentInfos = Object.entries(allInfos).find((pair) => pair[0] === infos);
  const info = componentInfos[1];
  if (type === 'strong') {
    const data = info;
    return data;
  }
  const data = type === 'H' ? info.Hfonts : info.Pfonts;
  console.log('DATA', infos, type, data);
  return data;
}

// function fontProperties(infos, type) {
//   const data = getContextInfos(infos, type);
//   const {
//     fontColor, backColor, lineHeight, paddingBottom,
//   } = data;
//   const ret = css`
//   color: ${fontColor};
//   background-color: ${backColor || null};
//   line-height: ${lineHeight || null};
//   padding-bottom: ${paddingBottom}px;
//   `;
//   return ret;
// }

function typoStrong(infos, type) {
  const data = getContextInfos(infos, type);
  const ret = css`
  color: ${data.strong};
  `;
  return ret;
}

// export const Title = styled.p`
//   font-family: 'Cormorant SC', serif;
//   ${(props) => fontProperties(props.infos, 'title')}
// `;

// export const P = styled.p`
//     font-family: 'Open Sans', sans-serif;
//     ${(props) => fontProperties(props.infos, 'p')}
// `;

export const St = styled.strong`
    font-weight: 700;
    ${(props) => typoStrong(props.infos, 'strong')}
`;

function fontProp(infos, type) {
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

export const H1 = styled.h1`
  font-family: 'Cormorant SC', serif;
  font-size: 48px;
  ${(props) => fontProp(props.infos, 'H')}
`;

export const P1 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  ${(props) => fontProp(props.infos, 'P')}
`;

export const H2 = styled.h2`
  font-family: 'Cormorant SC', serif;
  font-size: 36px;
  ${(props) => fontProp(props.infos, 'H')}
`;

export const P2 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  ${(props) => fontProp(props.infos, 'P')}
`;
