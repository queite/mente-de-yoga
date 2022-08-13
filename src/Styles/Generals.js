import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const Body = styled.body.attrs((props) => ({ heigth: props.heigth || 'none' }))`
//   display: flex;
//   flex-direction: column;
//   width: 100vw;
//   background-color: ${(props) => props.color};
//   margin: 0 auto;
//   height: ${(props) => props.heigth};
// `;

export const BasicLink = styled(Link)`
  font-family: 'Open Sans', sans-serif;
`;

export const BasicMain = styled.main`
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const BasicContent = styled.div`
    display: grid;
    gap: 20px;
    width: 80%;
    margin: 0 auto;
`;
