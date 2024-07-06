import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import images from '../../../../assets/statics/images';

import './header.css';
import GotoLink from '../../../../components/GotoLink/GotoLink';

export default function Header() {
  return (
    <div className="header__wrapper component-wrapper">
      <div className="header__image">
        <img src={images.headerbanner} />
      </div>
      <div className='header__content'>
        <div className='header__content-titles'>
          <span>Since 1975 —</span>
          <h1>Architecture.<br />Planning.<br />Design.</h1>
        </div>

        <div className='header__content-links'>
          <GotoLink text="Contact Us" link="/contact" />

          <div className='header__content-link_social'>
            <a href='www.instagram.com'><FaInstagram size={20} /></a>
            <a href='www.twitter.com'><FaTwitter size={20} /></a>
            <a href='www.linkedin.com'><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}