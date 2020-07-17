import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="tbd">
        <div className="container">
          <NavLink to="/" className="brand-logo">Persona 5 Royal</NavLink>
          <ul className="right">
           
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar