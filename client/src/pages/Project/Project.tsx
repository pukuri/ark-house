import { GoArrowRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";

import './project.css'
import { useEffect, useState } from "react";

const projectMockData = {
  name: 'Central Saint Giles',
  location: 'London',
  area: '70.000 m2',
  cost: '130 mil NOK',
  year: 2019,
  thumbnail: '',
  description: 'Nanchang Wave is a landscape based community centre with a varied program forming the heart of a large residential development. The double helix structure towards the wetland area gives 360 degrees overview of the neighbourhood as one walks up to the panoramic gallery at top.'
}

export default function Project() {
  const { id } = useParams();
  const [projectDetail, setProjectDetail] = useState(projectMockData)

  function getProjectData() {
    console.log(id)

    fetch(`http://localhost:3000/api/v1/projects/${id}`)
      .then(results => results.json())
      .then(data => { 
        console.log(data)
        setProjectDetail(data)
      })
  }

  useEffect(() => {
    getProjectData()
  }, [])

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
          <span>{projectDetail.name}</span>
        </div>

        <div className="project__summary">
          <h1 className="title-default">Central Saint Giles</h1>
          <div className="project__summary-content">
            <img src={projectDetail.thumbnail} />

            <div className="project__summary-texts">
              <div className="project__summary-text">
                <span className="project__summary-key">Location</span>
                <span className="project__summary-value">{projectDetail.location}</span>
              </div>

              <div className="project__summary-text">
                <span className="project__summary-key">Area</span>
                <span className="project__summary-value">{projectDetail.area}</span>
              </div>

              <div className="project__summary-text">
                <span className="project__summary-key">Construction Cost</span>
                <span className="project__summary-value">{projectDetail.cost}</span>
              </div>

              <div className="project__summary-text">
                <span className="project__summary-key">Year</span>
                <span className="project__summary-value">{projectDetail.year}</span>
              </div>

              <div className="project__summary-text">
                <span className="project__summary-key">Client</span>
                <span className="project__summary-value">Vanke</span>
              </div>
            </div>
          </div>
          <p>{projectDetail.description}</p>
        </div>
      </div>

      <div className="component-wrapper section-heading">
        <h1>Gallery</h1>
      </div>
    </>
  )
}