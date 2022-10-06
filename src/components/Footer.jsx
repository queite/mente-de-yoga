import React from 'react';
import PropTypes from 'prop-types';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import MainFooter from './Footer.styles';

export default function Footer({ position }) {
  return (
    <MainFooter position={position}>
      {/* <a target="_blank" href="https://www.instagram.com/mentedeyoga/" rel="noreferrer">
        <TiSocialInstagramCircular />
      </a>
      <a target="_blank" href="https://www.instagram.com/mentedeyoga/" rel="noreferrer">
        <TiSocialFacebookCircular />
      </a> */}
      <a target="_blank" href="https://www.instagram.com/tomas.om.yoga/" rel="noreferrer">
        <TiSocialInstagramCircular />
      </a>
    </MainFooter>
  );
}

Footer.propTypes = {
  position: PropTypes.string,
};

Footer.defaultProps = {
  position: 'static',
};
