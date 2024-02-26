import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

    const { pathname } = useLocation();

    const [active, setActive] = useState(false)
    const [close, setClose] = useState(false)

    const handleClose = () => {
        setClose(true)
        setActive(false)
    }

    const handleActive = () => {
        setActive(true)
        setClose(false)
    }
  return (
    <div className='navbar'>
        <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>        {/* <img  src='../../../public/assets/shared/logo.svg' alt="Space tourism logo" /> */}
        </div>
        <div onClick={handleActive} className={active ? "burgerIcon active" : "burgerIcon"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
        </div>
        

        <div className={close ? "navbarContent close" : "navbarContent"}>
            
            <hr className='navbarLine'></hr>
            <div className="navbarLinks">
                <div onClick={handleClose} className="iconClose">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
                </div>
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
