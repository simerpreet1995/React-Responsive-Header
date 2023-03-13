

import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navRef = useRef()

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
      <button className='nav-btn nav-close-btn' onClick={showNavbar}>
      <CloseOutlinedIcon/> 
        </button>
      
         <ul className='navbars'>
       <li> <NavLink className={"navbar-link"} to={'/'}>Home</NavLink> </li>
       <li> <NavLink className={"navbar-link"} to={'/about'}>About</NavLink> </li>
       <li> <NavLink className={"navbar-link"} to={'/contact'}>Contact</NavLink> </li>
      <li> <NavLink className={"navbar-link"} to={'/blogs'}>Blogs</NavLink> </li>

     </ul>

      {/* <a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a> */}

        
      </nav>

    <button className='nav-btn' onClick={showNavbar}>
    <MenuOutlinedIcon/>
    </button>

    </header>
  )
}

export default Navbar