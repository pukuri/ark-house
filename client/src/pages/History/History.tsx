import { GoArrowRight } from "react-icons/go"
import { Link } from "react-router-dom"

import './history.css'
import images from '../../assets/statics/images';
import GotoLink from "../../components/GotoLink/GotoLink";

export default function History() {
  return (
    <>
      <div className="history__wrapper component-wrapper">
        <div className="breadcrumb">
          <Link to="/">
            <span>Home</span>
          </Link>
          <GoArrowRight size={20} className="breadcrumb__arrow"/>
          <span>Our history</span>
        </div>

        <div className="history__content-section">
          <h1 className="title-default">Who we are</h1>

          <div className="history__content-item">
            <img src={images.historyimg1} />
            <div className="history__content-texts">
              <p>We are dedicated individuals from a range of different countries. Based in Oslo, with offices in Copenhagen, London and Reykjavik, we are actively involved in projects in various countries across Europe, Africa, the Middle East and Asia. <br /><br /> Together, we are a community with a culture for beautiful and outstanding architecture, a culture that is Powered by Commitment.</p>

              <h2>Do you want to work with us?</h2>

              <GotoLink text="Our Vacancies" link="/career" />

            </div>
          </div>
        </div>

        <div className="history__content-section">
          <h1 className="title-default">Our History</h1>
          <img src={images.historyimg2} />
          <br />
          <br />
          <p>For over four decades, ARK House, founded by renowned architect John Smith in 1975, has been a leader in the industry known for its innovative designs and commitment to client satisfaction. The agency's early work, including the Smith Tower in Seattle, established Smith's reputation as a leading architect. Over the years, ARK House has completed numerous high-profile projects, including the iconic Guggenheim Museum in Bilbao, Spain. The agency's success is due to its commitment to sustainability and community engagement, as well as its adaptation to new trends and technologies. Today, ARK House continues to push boundaries in architecture while setting new standards for innovation and excellence.</p>
        </div>
      </div>
    </>
  )
}