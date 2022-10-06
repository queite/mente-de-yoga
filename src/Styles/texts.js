/* eslint-disable no-confusing-arrow */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

function typo(fontSize, fontWeight, fontColor, backColor, lineHeight, paddingBottom) {
  const ret = css`
  font-size : ${fontSize}px;
  font-weight: ${fontWeight};
  color: var(--${fontColor});
  background-color: ${backColor || null};
  line-height: ${lineHeight || null};
  padding-bottom: ${paddingBottom}px;
  `;
  return ret;
}

function typos(fontSize, fontWeight, fontColor) {
  const ret = css`
  /* font-size : ${fontSize}px; */
  font-size: ${(props) => props.theme.header.title.fontSize};
  font-weight: ${fontWeight};
  color: var(--${fontColor});
  `;
  return ret;
}

export const Title = styled.p`
  font-family: 'Cormorant SC', serif;
  ${(props) => props.type === 'Header' && typos(32, 300, 'g4')}
  ${(props) => props.type === 'Hero' && typo(48, 100, 'g2')}
  ${(props) => props.type === 'Course' && typo(48, 100, 'g6', null, null, 20)}
  ${(props) => props.type === 'Article' && typo(48, 100, 'g7', null, null, 20)}
  ${(props) => props.type === 'Card' && typo(32, 500, 'd7', null, 1.5)}
`;

export const P = styled.p`
    font-family: 'Open Sans', sans-serif;
    ${(props) => props.type === 'Header' && typo(32, 300, 'g6')}
    ${(props) => props.type === 'Hero' && typo(20, 300, 'g6', null, 1.5)}
    ${(props) => props.type === 'Course' && typo(20, 300, 'g5', null, 1.5)}
    ${(props) => props.type === 'Card' && typo(16, 300, 'g10', null, 1.5)}
`;

export const St = styled.strong`
    font-weight: 700;
    color: ${(props) => props.theme.general.strong};
`;
