import React from "react";
import "./navbar.scss";
import logo2 from "../../logo2.png";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo2} alt='city tours logo' className='logo' />

      <ul className='nav-links'>
        <li>
          <a href='/' className='nav-link'>
            home
          </a>
        </li>
        <li>
          <a important href='/about' className='nav-link'>
            about
          </a>
        </li>
        <li>
          <a important href='/tours' className='nav-link active'>
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
