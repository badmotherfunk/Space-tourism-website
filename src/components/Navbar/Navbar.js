import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

    const { pathname } = useLocation();
  return (
    <div className='navbar'>
        <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>        {/* <img  src='../../../public/assets/shared/logo.svg' alt="Space tourism logo" /> */}
        </div>
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
