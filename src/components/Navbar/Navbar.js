import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/shared/logo.svg'

export default function Navbar() {

    const { pathname } = useLocation();
  return (
    <div className='navbar'>
        <img className='logo' src={Logo} alt="Space tourism logo" />
        <div className='navbarLine'></div>

        <div className="navbarContent">
            <div className="navbarLinks">
            <div className="navbarLayout"></div>
                <Link to={"/"}>
                <div className={ pathname === "/" ? "linksActive" : "links"}>
                    <p className='navbarNumbers'>
                        00 
                    </p>
                    <p className='navbarTitle'>
                        HOME
                    </p>
                </div>
                </Link>
                <Link to={"/destination"}>
                <div className={ pathname === "/destination" ? "linksActive" : "links"}>
                    <p className='navbarNumbers'>
                        01 
                    </p>
                    <p className='navbarTitle'>
                        DESTINATION
                    </p>
                </div>
                </Link>
                <Link to={'/crew'}>
                <div className={ pathname === "/crew" ? "linksActive" : "links"}>
                    <p className='navbarNumbers'>
                        02 
                    </p>
                    <p className='navbarTitle'>
                        CREW
                    </p>
                </div>
                </Link>
                <Link to={"/technology"}>
                <div className={ pathname === "/technology" ? "linksActive" : "links"}>
                    <p className='navbarNumbers'>
                        03 
                    </p>
                    <p className='navbarTitle'>
                        TECHNOLOGY
                    </p>
                </div>
                </Link>
            </div>
        </div>
        
    </div>
  )
}
