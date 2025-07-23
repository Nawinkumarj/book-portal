import React from 'react'
import { NavLink } from "react-router";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-list">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/package">Packages</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="navbar-sign-in">
        <NavLink to="/signin" className="signin-btn">
          Login
        </NavLink>
      </div>

    </div>
  );
}

export default Navbar
