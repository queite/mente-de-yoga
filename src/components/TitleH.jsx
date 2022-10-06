import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

function typos(infos) {
  const ret = css`
  font-size: ${infos.fontSize}px;
  font-weight: ${infos.fontWeight};
  color: var(--${infos.fontColor});
  `;
  return ret;
}

const Title = styled.p`
  font-family: 'Cormorant SC', serif;
  ${(props) => typos(props.infos)};
`;

// eslint-disable-next-line react/prop-types
function TitleH({ infos }) {
  const allInfos = useContext(ThemeContext);
  const componentInfos = Object.entries(allInfos).find((pair) => pair[0] === infos);
  const infoTitle = componentInfos[1];
  return (
    // eslint-disable-next-line react/prop-types
    <Title infos={infoTitle.text}>{ infoTitle.title }</Title>
  );
}

export default TitleH;
