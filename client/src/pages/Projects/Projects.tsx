import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

import './projects.css'
import { useEffect, useState } from "react";
import ProjectOverview from "../../components/ProjectOverview/ProjectOverview";

type projectOverviewData = {
  id: number
  year: number
  name: string
  location: string
  thumbnail: string
}

const mockProjectOverviewData:projectOverviewData[] = [
  {
    id: 1,
    year: 2020,
    name: '',
    location: '',
    thumbnail: ''
  }
]

export default function Projects() {
  const [projectOverviewData, setProjectOverviewData] = useState(mockProjectOverviewData)

  function getProjectOverviewData() {
    fetch(`http://localhost:3000/api/v1/projects.json`)
      .then(results => results.json())
      .then(data => { 
        console.log(data)
        setProjectOverviewData(data)
      })
  }

  useEffect(() => {
    getProjectOverviewData()
  }, [])

  return (
    <>
      <div className="projects-heading__wrapper component-wrapper section-heading">
        <div>
          <div className="breadcrumb" style={{ paddingTop: "20px" }}>
            <Link to="/">
              <span>Home</span>
            </Link>
            <GoArrowRight size={20} className="breadcrumb__arrow" />
            <span>Projects</span>
          </div>

          <div className="projects-heading__content">
            <h1 className="title-default">Projects</h1>
            <h2 className="sub-title">Our projects are examples of attitudes rather than design</h2>
            <p>They are samples in a series of contextual examination rather than isolated masterpieces. They are associative rather than symbolic. They are comments rather than statements. Every story told is a shared experience of  contemporary conditions set within a given frame.</p>
          </div>
        </div>
      </div>

      <div className="projects-content__wrapper component-wrapper">
        {
          projectOverviewData.map((project) => (
            <ProjectOverview id={project.id} year={project.year} name={project.name} location={project.location} thumbnail={project.thumbnail} />
          ))
        }
      </div>
    </>
  )
}