import React from 'react'
import { useState } from 'react';
import './Destination.css'
import dataJSON from '../../starter-code/data.json'

export default function Destination() {

  
  const projectsData = dataJSON.destinations;
  console.log(projectsData)

  const [data, setData] = useState(projectsData[0])
  const [active, setActive] = useState(projectsData[0].name)
  const [picture, setPicture] = useState(projectsData[0].images.webp)

  const handleDestination = (e) => {
    if(e.target.id !== null) {
      console.log(e.target.id)
      
      const destinationData = projectsData[e.target.id]
      
      setData(destinationData)
      setActive(destinationData.name)
      setPicture(destinationData.images.webp)
    }
  }
  console.log(active)


  return (
    <div className='destinationLanding'>

      <div className="destinationContainer">

        <div className="destinationTitleContainer">
          <p className='destinationNumber'>01</p>
          <h1 className='destinationTitle'>PICK YOUR DESTINATION</h1>
        </div>
        <div className='planetContainer'>
            <div className="planetPicture">
              <img src={picture} alt="Planet" />
            </div>
            <div className="planetContent">
                <div className="destinations">
                  {projectsData.map((destination, index) => (
                    <div key={index} className={active === destination.name ? "destinationsPlanetActive" : "destinationsPlanet"}>
                      <p onClick={handleDestination} id={index}>{destination.name}</p>
                    </div>
                  ))}           
                </div>
                <h2 className='planetName'>{data.name}</h2>
                <h3 className='planetDescription'>{data.description}</h3>

                <div className="planetSeparation"></div>

                <div className='travelContainer'>
                    <div className="distanceContent">
                      <p className='travelTitle'>AVG. DISTANCE</p>
                      <p className='travelText'>{data.distance}</p>
                    </div>
                    <div className="travelContent">
                      <p className='travelTitle'>EST. TRAVEL TIME</p>
                      <p className='travelText'>{data.travel}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}
