import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className='landing'>
      <div className="landingContainer">
        <div className="landingContent">
          <h1 className='landingTitle'>SO, YOU WANT TO TRAVEL TO</h1>
          <h2 className='landingTitleSpace'>SPACE</h2>
          <p className='landingText'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='landingButtonContainer'>
          <Link to={'/destination'} className='landingButton'>
            <p>EXPLORE</p>
          </Link>
        <div className="landingButtonLayout"></div>
        </div>
      </div>   
    </div>

  )
}
