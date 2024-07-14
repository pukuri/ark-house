import { GoArrowRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";

import './project.css'
import { useEffect, useState } from "react";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";

type projectDataType = {
  name: string
  location: string
  area: number
  cost: number
  year: number
  thumbnail: string
  description: string
}

const projectMockData: projectDataType = {
  name: '',
  location: '',
  area: 0,
  cost: 0,
  year: 0,
  thumbnail: '',
  description: ''
}

export default function Project() {
  const { id } = useParams();
  const [projectDetail, setProjectDetail] = useState(projectMockData)
  const [projectGallery, setProjectGallery] = useState([])

  function getProjectData() {
    fetch(`http://localhost:3000/api/v1/projects/${id}.json`)
      .then(results => results.json())
      .then(data => { 
        setProjectDetail(data)
      })
  }

  function getProjectGallery() {
    fetch(`http://localhost:3000/api/v1/projects/${id}/photos.json`)
      .then(results => results.json())
      .then(data => { 
        console.log(data)
        setProjectGallery(data)
      })
  }

  useEffect(() => {
    getProjectData()
    getProjectGallery()
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
          <h1 className="title-default">{projectDetail.name}</h1>
          <div className="project__summary-content">
            <img src={projectDetail.thumbnail} />

            <div className="project__summary-texts">
              <div className="project__summary-text">
                <span className="project__summary-key">Location</span>
                <span className="project__summary-value">{projectDetail.location}</span>
              </div>

              <div className="project__summary-text">
                <span className="project__summary-key">Area</span>
                <span className="project__summary-value">{projectDetail.area} m&#178;</span>
              </div>

              <div className="project__summary-text">
                <span className="project__summary-key">Construction Cost</span>
                <span className="project__summary-value">{projectDetail.cost} NOK</span>
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

      { projectGallery.length != 0 &&
        ( <>
            <div className="component-wrapper section-heading">
              <h1>Gallery</h1>
            </div>
            <div className="project__gallery-wrapper component-wrapper">
              {
                projectGallery.map((gallery, index) => {
                  return <ProjectGallery title={gallery.title} photo={gallery.photo} key={gallery.title+index} location={projectDetail.location} />
                })
              }
            </div>
          </>
        ) 
      }

      <div className="component-wrapper section-heading">
        <h1>Development Team</h1>
      </div>
    </>
  )
}