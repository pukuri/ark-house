import { useEffect, useState } from "react"

import './teams.css'

type teamType = {
  id: number
  name: string
}

type memberType = {
  id: number
  name: string
  title: string
  photo: string
}

const defaultTeams:teamType[] = [
  { id: 0, name: 'Team'}
]

const defaultMembers:memberType[] = [
  {
    id: 0,
    name: '',
    title: '',
    photo: ''
  }
]

export default function Teams() {
  const [teams, setTeams] = useState(defaultTeams)
  const [teamMembers, setTeamMembers] = useState(defaultMembers)

  function getTeamsData() {
    fetch('http://localhost:3000/api/v1/teams.json')
    .then(results => results.json())
    .then(data => {
      setTeams(data)
    })
  }

  function setDefaultActive() {
    fetch('http://localhost:3000/api/v1/teams/1/members.json')
      .then(results => results.json())
      .then(data => { 
        setTeamMembers(data)
      })

    document.getElementsByClassName('teams__content-tab')[0].classList.add('active')
  }

  useEffect(() => {
    getTeamsData()
    setDefaultActive()
  }, [])

  function getTeamMembersData(id:string) {
    fetch(`http://localhost:3000/api/v1/teams/${id}/members.json`)
      .then(results => results.json())
      .then(data => { 
        setTeamMembers(data)
      })

  }

  function handleTabClick(event: MouseEvent): void {
    const target: HTMLElement = event.target
    const key = target.getAttribute('data-key') || 'management'

    const lis: Element[] = Array.from(document.getElementsByClassName('teams__content-tab'));
    lis.forEach(li => {
      li.classList.remove('active')
    });
    target.classList.add('active');

    getTeamMembersData(key);
  }

  return (
    <>
      <div className="teams__wrapper" id="teams">
        <div className="component-wrapper section-heading">
          <h1>Our Team</h1>
        </div>

        <div className="teams__content-wrapper component-wrapper">
          <p>Our team of expert architects and builders, with over 45 years of combined experience, will bring your vision to life. Trust us to deliver functional and beautiful structures that exceed expectations.  </p>

          <div className="teams__content-contents">
            <div className="teams__content-tabs">
              <ul>
                {
                  teams.map((team) => (
                    <li key={team.name} className="teams__content-tab" data-key={team.id} onClick={(event) => handleTabClick(event)}>
                      {team.name}
                      <div></div>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="teams__content-content">
              <ul>
                {
                  teamMembers.map((teamMember, index) => (
                    <li data-key={index} key={teamMember.name}>
                      <img src={teamMember.photo} className="teams__content-content_img" />
                      <div className="teams__content-content_texts">
                        <p className="member__name">{teamMember.name}</p>
                        <p className="member__title">{teamMember.title}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}