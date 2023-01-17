import styled from 'styled-components';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BasicMain, BasicContent } from '../../Styles/Generals';

export const InstagramIcon = styled(TiSocialInstagramCircular)`
  font-size: 24px;
  color: var(--g9);
  margin-right: 4px;
`;

export const WhatsAppIcon = styled(AiOutlineWhatsApp)`
  font-size: 24px;
  color: var(--g9);
  margin-right: 4px;
`;

export const MailIcon = styled(HiOutlineMailOpen)`
  font-size: 24px;
  color: var(--g9);
  margin-right: 4px;
`;

export const GitHubsIcon = styled(AiFillGithub)`
  font-size: 20px;
`;

export const FooterMain = styled(BasicMain)`
  /* width: var(--wid); */
  min-height: 60px;
  padding-top: 40px;
  background-color: ${(props) => props.theme.footer.background};
  /* background-color: var(--g8); */
  /* background-color: red; */
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* font-size: 40px; */
  /* position: ${(props) => (props.position || 'static')}; */
  /* bottom: 0; */
  padding-bottom: 40px;
`;

export const FooterContent = styled(BasicContent)`
  grid-template-columns: 1fr;
  /* grid-template-areas:
  "left right"; */
  align-items : end;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  /* font-size: 20px; */
  gap: 4px;
  a {
    display: flex;
    text-decoration: none;
    color: var(--g11);
    align-items: center;
    border: 1px solid var(--g5);
    border-radius: 8px;
    padding: 8px;
    font-size: 12px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  gap: 8px;
  padding-top: 20px;
  /* background-color: red; */
  border-top: 1px solid var(--g8);
  div {
    display: flex;
    gap: 12px;
  }
  p {
    color: var(--g8);
  }
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: var(--g8);
  }
`;
