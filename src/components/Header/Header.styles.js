import styled from 'styled-components';
// import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const MainHeader = styled(BasicMain)`
    background-color: ${(props) => props.theme.header.background};
    padding: 0px;
`;

export const ContentHeader = styled(BasicContent)`
    color: ${(props) => props.theme.header.color};
    display: flex;
    align-items: center;
    padding: 8px 0;
    img {
      height: 80px;
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }
`;

export const LogoNome = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 600px) {
      h2 {
        font-size: 20px;
      }
    }
`;

export const Menu = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    flex-grow: 1;

    a {
      font-family: 'Open Sans', sans-serif;
      color: ${(props) => props.theme.general.links};
      border-bottom: 2px solid;
      border-color: ${(props) => props.theme.header.background};
      
      &:hover{
        border-bottom: 2px solid var(--d4);
      }    
      @media screen and (max-width: 600px) {
        font-size: 12px;
      }
    }
`;

export const StLink = styled(Link)`
  font-family: 'Open Sans', sans-serif;
  /* color: ${(props) => props.theme.general.links}; */
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.header.background};
  color: red;
  &:hover{
    border-bottom: 2px solid var(--d4);
  }
`;

export const HomeLink = styled(Link)`
  /* color: var(--g5); */
  `;

export const Img = styled.div`
  background-image: url(${(props) => props.theme.header.logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  @media screen and (max-width: 600px) {
      height: 40px;
      width: 40px;
    }
`;
