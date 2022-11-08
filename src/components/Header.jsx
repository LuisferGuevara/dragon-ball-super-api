import React, { useState } from "react";
import "../styles/Header.scss"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
  return (
    <header className="header">
     <Link to={""}><img
          src="https://upload.wikimedia.org/wikipedia/commons/2/22/Dragon_Ball_Super.png"
          alt="db"
          className='logo'
        /></Link>
      <button onClick={toggleMenu} className="header-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="header-svg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
       </button>
      <nav className={`header-nav ${menu ? 'is--active' : ""}`}>
        <ul className="header-ul">
          <li className="header-li">
          <NavLink to="" activeclassname={"active"}>Home</NavLink>
     
          </li>
          <li className="header-li">
          <NavLink to="about" activeclassname={"active"}>About</NavLink>
     
          </li>
          <li className="header-li">
          <NavLink to="characters" activeclassname={"active"}>Characters</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
