import React from 'react'
import { Link } from 'react-router-dom'

const RideNav = () => {
  return (
    <div>
      <Link to="/magickingdom">Magic Kingdom</Link>
      <Link to="/animalkingdom">Animal Kingdom</Link>
      <Link to="/hollywoodstudios">Hollywood Studios</Link>
      <Link to="/epcot">Epcot</Link>
    </div>
  )
}

export default RideNav
