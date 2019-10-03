import React from 'react'
import { Link } from 'react-router-dom'

const RideNav = () => {
  return (
    <div>
      <Link to="/scores">Magic Kingdom</Link>
      <Link to="/scores">Animal Kingdom</Link>
      <Link to="/scores">Hollywood Studios</Link>
      <Link to="/scores">Epcot</Link>
    </div>
  )
}

export default RideNav
