import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <section className="top-container">
      <div className="top-left">
        <header>
          <h1>49 Ride Challenge</h1>
        </header>
      </div>
      <div className="top-right"></div>
      <div className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/scores">Scores</Link>
          <Link to="/rules">Rules</Link>
        </div>
      </div>
    </section>
  )
}

export default HeaderNav
