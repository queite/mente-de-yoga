import styled from 'styled-components';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

export const MainHeader = styled.div`
    font-family: 'Cormorant SC', serif;
    color: var(--g1);
    width: var(--wid);
    background-color: var(--g10);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    border-radius: 0 0 8px 8px;
    margin-bottom: 8px;

    img {
      width: 50px;
    }
`;

export const GhostHeader = styled.div`
  width: var(--wid);
  height: 70px;
`;

export const Fold = styled(AiOutlineMenuFold)`
  cursor: pointer;
  font-size: 30px;
  color: var(--g5);
  /* margin-right: 16px; */
`;

export const Unfold = styled(AiOutlineMenuUnfold)`
  cursor: pointer;
  font-size: 30px;
  color: var(--g5);
  /* margin-right: 16px; */
`;

export const MenuIcons = styled.div`
  margin-right: 40px;
    /* @media (min-width: 400px) {
        visibility: hidden;
        opacity: 0;
        transition: visibility 2s linear 300ms, opacity 300ms; 
    }*/
  `;
