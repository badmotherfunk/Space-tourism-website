import React from 'react'
import { useState } from 'react';
import dataJSON from '../../starter-code/data.json'
import './Technology.css'
import Navbar from '../../components/Navbar/Navbar';

export default function Technology() {

  const projectsData = dataJSON.technology;
  console.log(projectsData)

  const [active, setActive] = useState(0)
  const [data, setData] = useState(projectsData[0])

  const handleTechnology = (e) => {
    console.log(e)
    const id = parseInt(e.target.id)

    const technologyData = projectsData[e.target.id]

    setActive(id)
    setData(technologyData)
  }

  return (
    <div className='technologyLanding'>
        <Navbar/>
         <div className="technologyGlobalContainer">

            <div className="titleContainer">
              <p className='number'>03</p>
              <h1 className='title'>SPACE LAUNCH 101</h1>
            </div>

            <div className="technologyContainer">
              <div className="technologyButtonContainer">
                {projectsData.map((technology,index) => (
                  <div className={active === index ? 'technologyRadioButtonActive' : 'technologyRadioButton'} id={index} onClick={handleTechnology}>{index + 1}</div>
                ))}
              </div>
              <div className="technologyInformationContainer">
                <p className='technologyInformationSubtitle'>THE TERMINOLOGY...</p>
                <h2 className='technologyInformationTitle'>{data.name}</h2>
                <h3 className='technologyInformationDescription'>{data.description}</h3>
              </div>
              <div className="technologyPicture">
              <img src={data.images.portrait} alt={data.name} />
            </div>
            </div>

      </div>

</div>
  )
}
