import styled from 'styled-components';
// import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { BasicLink, BasicMain, BasicContent } from '../../Styles/Generals';

export const MainHeader = styled(BasicMain)`
    /* background-color: var(--g11); */
    background-color: ${(props) => props.theme.header.background};
    /* position: fixed; */
    /* width: 100%; */
    /* z-index: 3; */
    padding: 0;
`;

export const ContentHeader = styled(BasicContent)`
    color: ${(props) => props.theme.header.color};
    display: flex;
    align-items: center;
    padding: 8px 0;
    img {
      height: 80px;
    }
`;

export const LogoNome = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Menu = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    flex-grow: 1;
`;

// export const Fold = styled(AiOutlineMenuFold)`
//   cursor: pointer;
//   font-size: 30px;
//   color: var(--g5);
// `;

// export const Unfold = styled(AiOutlineMenuUnfold)`
//   cursor: pointer;
//   font-size: 30px;
//   color: var(--g5);
// `;

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
