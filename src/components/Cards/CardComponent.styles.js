import styled from 'styled-components';
import { P } from '../../Styles/texts';

export const Card = styled.div`
  border-radius: 4px;
  height: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  border-radius: 4px;
  background-color: var(--d1);
  color: var(--d7);
  border: 1px solid var(--d2);
  cursor: pointer;
  text-transform: uppercase;
`;
