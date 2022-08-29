import styled from 'styled-components';
import { P } from '../../Styles/texts';

export const Card = styled.div`
  /* align-self: center; */
  border-radius: 4px;
  /* width: 270px; */
  height: 250px;
  /* transition: 1s; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-end; */
  /* margin: 8px; */
  background-color: var(--g4);
  padding: 12px 20px 24px 20px;
`;

export const Par = styled(P)`
  overflow: hidden;
  white-space: wrap;
`;

export const Button = styled.button`
  position: absolute;
  top: 230px;
  right: 20px;
  padding: 8px 16px;
  border: 0px solid black;
  border-radius: 4px;
  background-color: var(--d1);
  color: var(--d7);
  cursor: pointer;
`;
