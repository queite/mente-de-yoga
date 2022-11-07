import React from 'react';
import PropTypes from 'prop-types';
import {
  FooterMain, FooterContent, LeftContent, RightContent,
  InstagramIcon, WhatsAppIcon, GitHubsIcon, MailIcon,
} from './Footer.styles';

export default function Footer({ position }) {
  return (
    <FooterMain position={position}>
      <FooterContent>
        <LeftContent>
          <a target="_blank" href="https://www.instagram.com/tomas.om.yoga/" rel="noreferrer">
            <InstagramIcon />
            @tomas.om.yoga
          </a>
          <a target="_blank" href="https://wa.me/5554999964137" rel="noreferrer">
            <WhatsAppIcon />
            (54) 9-9996-4137
          </a>
          <a target="_blank" href="mailto:tomas.yoga@yahoo.com" rel="noreferrer">
            <MailIcon />
            tomas.yoga@yahoo.com
          </a>
        </LeftContent>
        <RightContent>
          <p>Este site foi desenvolvido por:</p>
          <div>
            <a target="_blank" href="https://github.com/Tomas-Breuckmann" rel="noreferrer">
              <GitHubsIcon />
              <span> Tomas Breuckmann </span>
            </a>
            <a target="_blank" href="https://github.com/queite" rel="noreferrer">
              <GitHubsIcon />
              <span> Queite S. Castiglioni </span>
            </a>
          </div>
        </RightContent>
      </FooterContent>
    </FooterMain>
  );
}

Footer.propTypes = {
  position: PropTypes.string,
};

Footer.defaultProps = {
  position: 'static',
};
