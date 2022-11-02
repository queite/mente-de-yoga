import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const AdminMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.adminPageConfigs.background};
`;

export const AdminContent = styled(BasicContent)`
  grid-template-columns: 1fr 5fr;
`;
