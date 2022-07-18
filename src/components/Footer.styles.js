import styled from 'styled-components';

const MainFooter = styled.footer`
  width: var(--wid);
  background-color: var(--g10);
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-radius: 8px 8px 0 0;
  /* margin-bottom: 8px; */
  font-size: 24px;
  position: ${(props) => (props.position || 'static')};
  bottom: 0;

  a {
    text-decoration: none;
    color: var(--g5);
  }
`;

export default MainFooter;
