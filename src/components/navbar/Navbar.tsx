import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo1.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/events">EVENTS</NavLink>
        </li>
        <li>
          <NavLink to="/publications">PUBLICATIONS</NavLink>
        </li>
        <li>
          <NavLink to="/sponsors">SPONSORS</NavLink>
        </li>
      </ul>
      <div className="navbar-join">
        <a
          href="https://clubs.msa.monash.edu/organisation/7005/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JOIN US
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
