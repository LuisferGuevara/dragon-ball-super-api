import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/Navbar.scss"

const Navbar = () => {
  return (
    <div className='navigation'>
    <Link to={""}><img
          src="https://upload.wikimedia.org/wikipedia/commons/2/22/Dragon_Ball_Super.png"
          alt="db"
          className='logo'
        /></Link>
    <nav>
      <NavLink to="" activeclassname={"active"}>Home</NavLink>
      <NavLink to="about" activeclassname={"active"}>About</NavLink>
      <NavLink to="characters" activeclassname={"active"}>Characters</NavLink>
    </nav>
    

    </div>
  )
}

export default Navbar
