import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import FortyNineRideLogo from '../images/FortyNineRideLogo.png'

const HeaderNav = () => {
  const element = <FontAwesomeIcon icon={faBars} />

  return (
    <section className="top-container">
      <div className="top-left">
        <header>
          <Link to="/">
            <img className="header-logo" src={FortyNineRideLogo} alt="" />
          </Link>
        </header>
      </div>
      <div className="top-right">
        <div className="dropdown">
          <button className="dropbtn">{element}</button>
          <div className="dropdown-content">
            <Link className="dropdown-link" to="/">
              Home
            </Link>
            <Link className="dropdown-link" to="/scores">
              Scores
            </Link>
            <Link className="dropdown-link" to="/rules">
              Rules
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderNav
