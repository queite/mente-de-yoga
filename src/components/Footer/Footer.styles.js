import styled from 'styled-components';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const InstagramIcon = styled(TiSocialInstagramCircular)`
  font-size: 24px;
  color: var(--g9);
  margin-right: 12px;
`;

export const WhatsAppIcon = styled(AiOutlineWhatsApp)`
  font-size: 24px;
  color: var(--g9);
  margin-right: 12px;
`;

export const MailIcon = styled(HiOutlineMailOpen)`
  font-size: 24px;
  color: var(--g9);
  margin-right: 12px;
`;

export const GitHubsIcon = styled(AiFillGithub)`
  font-size: 20px;
`;

export const FooterMain = styled(BasicMain)`
  /* width: var(--wid); */
  min-height: 60px;
  background-color: ${(props) => props.theme.footer.background};
  /* background-color: red; */
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* font-size: 40px; */
  /* position: ${(props) => (props.position || 'static')}; */
  /* bottom: 0; */
`;

export const FooterContent = styled(BasicContent)`
  grid-template-columns: 1fr 1fr;
  /* grid-template-areas:
  "left right"; */
  align-items : end;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  /* text-align: left; */
  align-items: start;
  /* font-size: 20px; */
  gap: 4px;
  a {
    display: flex;
    text-decoration: none;
    color: var(--g11);
    align-items: center;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  /* font-size: 20px; */
  gap: 8px;
  div {
    display: flex;
    gap: 12px;
  }
  a {
    display: flex;
    text-decoration: none;
    color: var(--g11);
    align-items: center;
  }
`;
