import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: fixed;
    right: ${(props) => (props.menu ? '0px' : '-120px')};
    top: 60px;
    transition: right 0.3s linear 300ms, opacity 300ms;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: var(--g4);
    width: 120px;
    z-index: 10000;
    padding: 30px 0px;
    border-radius: 8px 0 0 8px;
`;
