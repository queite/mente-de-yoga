import React from 'react';
import styled, { css } from 'styled-components';

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
  ${(props) => typos(props.infos.text)};
`;

// eslint-disable-next-line react/prop-types
function TitleH({ infos }) {
  return (
    // eslint-disable-next-line react/prop-types
    <Title infos={infos}>{ infos.title }</Title>
  );
}

export default TitleH;
