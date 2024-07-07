import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import GotoLink from "../GotoLink/GotoLink";

import './footer.css'
import { Link } from "react-router-dom";

type addressDatumType = {
  area: string
  address: string
  street: string
  city: string
  block: string
  phone: string
}

const addressData: addressDatumType[] = [
  {
    area: 'North',
    address: "St George's House 56",
    street: 'Peter Street',
    city: 'Manchester',
    block: 'M2 3NQ',
    phone: '+44 (0)161 236 6263'
  },
  {
    area: 'Midlands',
    address: 'Unit 12',
    street: '133 Newhall Street',
    city: 'Birmingham',
    block: 'B3 1SF',
    phone: '+44 (0)121 289 4363'
  },
  {
    area: 'South',
    address: "Unit 24",
    street: 'Greville Street',
    city: 'London',
    block: 'EC1N 8SS E4',
    phone: '+44 (0)20 3096 9263'
  }
]

export default function Footer() {
  return (
    <>
      <div className="footer__wrapper">
        <div className="component-wrapper section-heading">
          <h1>Start a Project?</h1>
          <GotoLink text='Contact Us' link='/contact' />
        </div>

        <div className="footer__contents component-wrapper">
          <div className="footer__content-addresses">
            <div className="footer__content-support">
              <h1>Support is available 24 hours</h1>
              <GotoLink text='Contact Us' link='/contact' />
            </div>

            <div className="footer__content-address">
              {
                addressData.map((addressUnit, index) => (
                  <div className="footer__content-address_unit" key={`${addressUnit.area}-${index}`}>
                    <p>{addressUnit.area}</p>
                    <p>AFL Architects</p>
                    <p>{addressUnit.address}</p>
                    <p>{addressUnit.street}</p>
                    <p>{addressUnit.city}</p>
                    <p>{addressUnit.block}</p>
                    <br />
                    <p>{addressUnit.phone}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="footer__content-links">
            <div className="footer__content-navs">
              <ul>
                <li className="footer__content-nav">
                  <Link to="/history">
                    <span className="navbar__link-numbers">1</span>
                    <span>About</span>
                  </Link>
                </li>
                <li className="footer__content-nav">
                  <a href="#services">
                    <span className="footer__content-nav-numbers">2</span>
                    <span>Services</span>
                  </a>
                </li>
                <li className="footer__content-nav">
                  <a href="#services">
                    <span className="footer__content-nav-numbers">3</span>
                    <span>Projects</span>
                  </a>
                </li>
                <li className="footer__content-nav">
                  <a href="#services">
                    <span className="footer__content-nav-numbers">4</span>
                    <span>Team</span>
                  </a>
                </li>
                <li className="footer__content-nav">
                  <a href="#services">
                    <span className="footer__content-nav-numbers">5</span>
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__content-socials">
              <a href='www.instagram.com'><FaInstagram size={20} /></a>
              <a href='www.twitter.com'><FaTwitter size={20} /></a>
              <a href='www.linkedin.com'><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer__copyright component-wrapper">
          <p>© Copywriting | All Rights Reserved</p>
          <p>Terms of Use | Privacy</p>
        </div>
      </div>
    </>
  )
}