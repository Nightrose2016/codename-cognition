import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import gamelogo from '../styles/pictures/game-logo.png'

export class NavBar extends Component {
  render() {
    return (
      <nav className="tbd">
        <div className="container">
          <NavLink to="/" className="game-logo"><img src={gamelogo}></img></NavLink>
          <NavLink to="/quizzes" className="navbar">Quizzes</NavLink>
          <NavLink to="/exams" className="navbar">Exams</NavLink>
          <ul className="right">
           
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar