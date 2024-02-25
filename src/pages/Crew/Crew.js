import React from 'react'
import { useState } from 'react';
import dataJSON from '../../starter-code/data.json'
import './Crew.css'

export default function Crew() {

  const projectsData = dataJSON.crew;
  console.log(projectsData)

  const [active, setActive] = useState(0)
  const [data, setData] = useState(projectsData[0])

  const handleRadio = (e) => {
    const id = parseInt(e.target.id)
    const crewData = projectsData[e.target.id]

    setActive(id)
    setData(crewData)
  }
  console.log(active)

  return (
    <div className='crewLanding'>
      <div className="crewBackground"></div>
      <div className="globalContainer">

        <div className="titleContainer">
          <p className='number'>02</p>
          <h1 className='title'>MEET YOUR CREW</h1>
        </div>
        <div className="crewContainer">
          <div className="crewContent">

            <div className="crewInformations">
              <h2 className='crewRole'>{data.role}</h2>
              <h3 className='crewMember'>{data.name}</h3>
              <p className="crewDescription">{data.bio}</p>
            </div>

            <div className='radioContainer'>
              {projectsData.map((member,index) => (
                <input key={index} type="radio" id={index} onClick={handleRadio} className={active === index ? "radioButtonActive" : "radioButton"}/>
                ))}
            </div>           

          </div>

          <div className="crewPicture">
            <img src={data.images.webp} alt={data.name} />
          </div>
        </div>
      </div>

    </div>
  )
}
