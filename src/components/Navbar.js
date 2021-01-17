import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/">
            Full Stack Developer
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/responsive-web-design">
            Responsive Web Design 
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/js-algorithms-&-data-structures">
            JavaScript Algorithms & Data Structures
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/front-end-libraries">
            Front End Libraries
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/data-visualization">
            Data Visualization
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/apis-&-microservices">
            APIs and Microservices
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/quality-assurance">
            Quality Assurance
        </NavLink>
      </div>
    )
  }
}

export default Navbar;
