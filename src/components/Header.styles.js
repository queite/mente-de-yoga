import styled from 'styled-components';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

export const MainHeader = styled.div`
    /* font-family: 'Cormorant SC', serif; */
    /* color: var(--g1); */
    width: var(--wid);
    min-height: 90px;
    background-color: var(--g11);
    padding: 0 130px 0 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    /* border-radius: 0 0 8px 8px; */
    /* margin-bottom: 60px; */


`;

export const LogoNome = styled.div`
  display: flex;
  font-family: 'Cormorant SC', serif;
  font-size: 32px;
  color: var(--g6);
  align-items: center;
  /* background-color: red; */
  img {
      height: 80px;
      /* background-color: blue; */
    }
  p {
    padding-left: 20px;
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
