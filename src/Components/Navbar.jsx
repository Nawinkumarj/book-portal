import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  return (
    <nav className="navbar">
        <div
          className={`navbar-list ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(false)} // close menu on link click
        >
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/package" activeClassName="active">
            Packages
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </div>

        <div className="navbar-sign-in">
          <NavLink to="/signin" className="signin-btn" activeClassName="active">
            Login
          </NavLink>
        </div>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0}>
          <div
            style={{
              transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <div
            style={{
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              transform: mobileMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
            }}
          />
        </div>
      </nav>

  );
}

export default Navbar
