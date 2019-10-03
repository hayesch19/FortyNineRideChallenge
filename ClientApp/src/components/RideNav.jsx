import React from 'react'
import { Link } from 'react-router-dom'

const RideNav = () => {
  return (
    <div className="ride-nav">
      <Link className="ride-nav" to="/magickingdom">
        Magic Kingdom
      </Link>
      <Link className="ride-nav" to="/animalkingdom">
        Animal Kingdom
      </Link>
      <Link className="ride-nav" to="/hollywoodstudios">
        Hollywood Studios
      </Link>
      <Link className="ride-nav" to="/epcot">
        Epcot
      </Link>
    </div>
  )
}

export default RideNav
