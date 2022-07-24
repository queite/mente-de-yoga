import styled from 'styled-components';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

export const MainHeader = styled.div`
    background-color: var(--g11);
    /* width: var(--wid); */
    /* min-height: 90px; */
    /* padding: 0 130px 0 130px; */
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
    /* position: sticky; */
`;

export const ContentHeader = styled.div`
    color: var(--g6);
    width: 80%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    padding: 5px 0;
`;

export const LogoNome = styled.div`
  display: flex;
  font-family: 'Cormorant SC', serif;
  font-size: 32px;
  color: var(--g6);
  align-items: center;
  img {
      height: 80px;
    }
    h1 {
        margin-left: 20px;
        font-family: 'Cormorant SC', serif;
        font-size: 32px;
        font-weight: 300;
    }
`;

export const Menu = styled.div`
    display: flex;
    /* background-color:red; */
    gap: 20px;
    justify-content: flex-end;
    flex-grow: 1;
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
