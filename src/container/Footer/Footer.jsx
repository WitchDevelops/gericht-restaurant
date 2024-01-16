import React from 'react';
import { FooterContent, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="app__footer">
      <Newsletter />
      <FooterContent />
    </footer>
  )
}

export default Footer