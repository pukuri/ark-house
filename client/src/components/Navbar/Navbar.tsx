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
              <Link to="/history">
                <span className="navbar__link-numbers">1</span>
                <span>About</span>
              </Link>
            </li>
            <li className="navbar__link">
              <Link to="/#services">
                <span className="navbar__link-numbers">2</span>
                <span>Services</span>
              </Link>
            </li>
            <li className="navbar__link">
              <Link to="/projects">
                <span className="navbar__link-numbers">3</span>
                <span>Projects</span>
              </Link>
            </li>
            <li className="navbar__link">
              <a href="#teams">
                <span className="navbar__link-numbers">4</span>
                <span>Team</span>
              </a>
            </li>
            <li className="navbar__link">
              <a href="#blogs">
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