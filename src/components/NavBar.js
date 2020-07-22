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
          <NavLink to="/retrogames" className="navbar">Retro Games</NavLink>
          <NavLink to="/dvds" className="navbar">DVDs</NavLink>
          <NavLink to="/books" className="navbar">Books</NavLink>
          <NavLink to="/movies" className="navbar">Movies</NavLink>
          <ul className="right">
           
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar