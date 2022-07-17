import styled from 'styled-components';

const MainFooter = styled.footer`
  width: var(--wid);
  background-color: var(--amarelo-claro-100);
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-radius: 0 0 12px 12px;
  margin-bottom: 8px;
  font-size: 24px;
  position: ${(props) => (props.position || 'static')};
  bottom: 0;

  a {
    text-decoration: none;
    color: black;
  }
`;

export default MainFooter;
