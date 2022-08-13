import styled from 'styled-components';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { BasicLink } from '../../Styles/Generals';

export const MainHeader = styled.div`
    background-color: var(--g11);
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
  gap: 20px;
  align-items: center;
  img {
      height: 80px;
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
export const StLink = styled(BasicLink)`
  color: var(--g5);
  border-bottom: 1px solid var(--g11);
  &:hover{
    border-bottom: 1px solid var(--d4);
  }
`;

export const HomeLink = styled(BasicLink)`
  color: var(--g5);
`;
