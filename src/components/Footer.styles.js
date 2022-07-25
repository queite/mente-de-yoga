import styled from 'styled-components';

const MainFooter = styled.footer`
  /* width: var(--wid); */
  min-height: 60px;
  background-color: var(--g11);
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  font-size: 40px;
  /* position: ${(props) => (props.position || 'static')}; */
  /* bottom: 0; */

  a {
    text-decoration: none;
    color: var(--g5);
  }
`;

export default MainFooter;
