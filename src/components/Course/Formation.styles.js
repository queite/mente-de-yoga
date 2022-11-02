import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const FormationMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.course.background};
`;

export const FormationContent = styled(BasicContent)`
  grid-template-columns: 10fr 1fr 4fr;
  /* grid-template-areas:
  "text space img";
  align-items: end; */
`;
