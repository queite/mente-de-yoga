import styled from 'styled-components';

const MainFooter = styled.footer`
  /* width: var(--wid); */
  min-height: 60px;
  background-color: var(--g11);
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 40px;
  /* position: ${(props) => (props.position || 'static')}; */
  /* bottom: 0; */

  a {
    text-decoration: none;
    color: var(--g5);
    margin-right: 120px;
  }
`;

export default MainFooter;
