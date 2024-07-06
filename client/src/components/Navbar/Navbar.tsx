import { Link } from "react-router-dom";
import images from '../../assets/statics/images';

import './navbar.css';

export default function Navbar() {
  return(
    <>
      <div className="navbar__wrapper component-wrapper">
        <div className="navbar__logo">
          <Link to="/">
            <img src={images.logo} />
          </Link>
        </div>

        <div className="navbar__links">
          <ul>
            <li className="navbar__link">
              <a href="#about">
                <span className="navbar__link-numbers">1</span>
                <span>About</span>
              </a>
            </li>
            <li className="navbar__link">
              <a href="#services">
                <span className="navbar__link-numbers">2</span>
                <span>Services</span>
              </a>
            </li>
            <li className="navbar__link">
              <a href="#services">
                <span className="navbar__link-numbers">3</span>
                <span>Projects</span>
              </a>
            </li>
            <li className="navbar__link">
              <a href="#services">
                <span className="navbar__link-numbers">4</span>
                <span>Team</span>
              </a>
            </li>
            <li className="navbar__link">
              <a href="#services">
                <span className="navbar__link-numbers">5</span>
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}