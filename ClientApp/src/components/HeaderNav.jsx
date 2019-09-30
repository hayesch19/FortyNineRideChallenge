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
      <div className="top-right">
        <Link to="/">Home</Link>
        <Link to="/scores">Scores</Link>
        <Link to="/rules">Rules</Link>
      </div>
    </section>
  )
}

export default HeaderNav
