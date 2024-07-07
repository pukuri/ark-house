import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import images from "../../assets/statics/images";

import './project.css'

const projectMockData = {
  location: 'London',
  area: '70.000 m2',
  cost: '130 mil NOK',
  year: 2019,
  client: 'Vanke',
  desc: 'Nanchang Wave is a landscape based community centre with a varied program forming the heart of a large residential development. The double helix structure towards the wetland area gives 360 degrees overview of the neighbourhood as one walks up to the panoramic gallery at top.'
}

function ProjectSummary() {
  return (
    <div className="project__summary-texts">
      <div className="project__summary-text">
        <span className="project__summary-key">Location</span>
        <span className="project__summary-value">{projectMockData.location}</span>
      </div>

      <div className="project__summary-text">
        <span className="project__summary-key">Area</span>
        <span className="project__summary-value">{projectMockData.area}</span>
      </div>

      <div className="project__summary-text">
        <span className="project__summary-key">Construction Cost</span>
        <span className="project__summary-value">{projectMockData.cost}</span>
      </div>

      <div className="project__summary-text">
        <span className="project__summary-key">Year</span>
        <span className="project__summary-value">{projectMockData.year}</span>
      </div>

      <div className="project__summary-text">
        <span className="project__summary-key">Client</span>
        <span className="project__summary-value">{projectMockData.client}</span>
      </div>
    </div>
  )
}

export default function Project() {
  return (
    <>
      <div className="project__wrapper component-wrapper">
        <div className="breadcrumb">
          <Link to="/">
            <span>Home</span>
          </Link>
          <GoArrowRight size={20} className="breadcrumb__arrow" />
          <Link to="/projects">
            <span>Projects</span>
          </Link>
          <GoArrowRight size={20} className="breadcrumb__arrow" />
          <span>Central Saint Giles</span>
        </div>

        <div className="project__summary">
          <h1 className="title-default">Central Saint Giles</h1>
          <div className="project__summary-content">
            <img src={images.project1img1} />

            <ProjectSummary />
          </div>
          <p>{projectMockData.desc}</p>
        </div>
      </div>

      <div className="component-wrapper section-heading">
        <h1>Gallery</h1>
      </div>
    </>
  )
}