import { useState, useEffect } from "react";
import GotoLink from "../../../../components/GotoLink/GotoLink";
import ProjectOverview from "../../../../components/ProjectOverview/ProjectOverview";

import './projects.css'

type projectOverviewData = {
  id: number
  name: string
  location: string
  thumbnail: string
}

const mockProjectOverviewData:projectOverviewData[] = [
  {
    id: 1,
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
      <div className="projects__wrapper" id="projects">
        <div className="component-wrapper section-heading">
          <h1>Recent Projects</h1>
          <GotoLink text='Discover All' link='/projects' />
        </div>

        <div className="projects-content__wrapper component-wrapper">
          {
            projectOverviewData.map((project, index) => {
              return (
                <>
                  {
                  index === 2 && 
                    (
                      <div className="projects__subtext thumbnail-tile-3"> 
                        <h1>25</h1> 
                        <h2>Years of architecture, planning, and design</h2>
                      </div>
                    )
                  }
                  <ProjectOverview id={project.id} year={null} name={project.name} location={project.location} thumbnail={project.thumbnail} />
                </>
              );
            })
          }
        </div>
      </div>
    </>
  )
}