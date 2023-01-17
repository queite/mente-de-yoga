/* eslint-disable no-confusing-arrow */
/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';

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

export const Sk = styled.p`
  font-family: 'Optima', 'Segoe', 'Segoe UI', 'Candara', 'Calibri', 'Arial', sans-serif;
  color: var(--g9);
  font-size: 0.9em;
  font-weight: 600;
  padding: 8px 0;
`;

export const Skr = styled.strong`
  /* font-family: 'Special Elite', cursive; */
  font-family: 'Optima', 'Segoe', 'Segoe UI', 'Candara', 'Calibri', 'Arial', sans-serif;
  font-size: 1em;
  font-weight: 500;
`;

export const Cita = styled.div`
  /* margin-left: 12px; */
  border-left: 2px solid var(--d6);
  padding-left: 12px;

  div {
    margin-bottom: 12px;
  }
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

export function detach() {
  const ret = css`
    border: 1px solid var(--d6);
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 8px;
  `;
  return ret;
}

export const H1 = styled.h1`
  ${(props) => props.detach && detach()}
`;

export const P1 = styled.p`
  ${(props) => props.detach && detach()}
`;

export const H2 = styled.h2`
  ${(props) => props.detach && detach()}
`;

export const P2 = styled.p`
  ${(props) => props.detach && detach()}
`;

export const H3 = styled.h3`
  ${(props) => props.detach && detach()}
`;

export const P3 = styled.p`
  ${(props) => props.detach && detach()}
`;

export const H4 = styled.h4`
  ${(props) => props.detach && detach()}
`;

export const Li = styled.li`
  ${(props) => fontProp(props.infos, 'P')}
`;

export const Ul = styled.ul`
  margin: 4px 0 8px 24px;
`;

export const UlSub = styled.ul`
  margin: 8px 0 0 64px;
  /* margin-left: 64px; */
`;

export const LIcon = styled(AiFillCheckCircle)`
    color: var(--d5);
    margin: 0 12px 0 -24px;
    font-size: 12px;
`;

export const OIcon = styled(AiOutlineCheckCircle)`
    color: var(--d5);
    margin: 0 12px 0 -24px;
    font-size: 12px;
    /* margin-left: 32px; */
`;
