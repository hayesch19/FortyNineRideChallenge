import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stopwatch from '../components/Stopwatch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const HollywoodStudios = () => {
  const element = <FontAwesomeIcon icon={faCheckCircle} />

  const [hollywoodStudiosRides, setHollywoodStudiosRides] = useState([])
  const fetchHollywoodStudiosData = async () => {
    const resp = await axios.get('https://localhost:5001/api/DWParks/-3/rides')
    setHollywoodStudiosRides(resp.data)
    console.log(resp.data)
  }
  const [rideCompleted, setRideCompleted] = useState([])

  useEffect(() => {
    fetchHollywoodStudiosData()
  }, [])

  const rideClicked = async ride => {
    const resp = await axios.patch(
      `https://localhost:5001/api/DWRides/${ride.id}/completed`
    )
    setRideCompleted(resp.data)
    ride.completed = true
    console.log(resp.data, 'Ride Completed')
  }
  return (
    <main>
      <div className="timer-area">
        <Stopwatch />
      </div>
      <div className="ride-list-area">
        <h2>Hollywood Studios</h2>
        <section className="displayed-rides">
          {hollywoodStudiosRides.map((ride, i) => {
            return (
              <p key={i}>
                <button className="ride-btn" onClick={() => rideClicked(ride)}>
                  {element}
                </button>
                {ride.rideName}
              </p>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default HollywoodStudios
