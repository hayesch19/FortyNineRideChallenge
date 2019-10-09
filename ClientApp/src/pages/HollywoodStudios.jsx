import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stopwatch from '../components/Stopwatch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const HollywoodStudios = () => {
  const [attempt, setAttempt] = useState()
  const [rideCompleted, setRideCompleted] = useState([])
  const [hollywoodStudiosRides, setHollywoodStudiosRides] = useState([])

  const element = <FontAwesomeIcon icon={faCheckCircle} />

  const fetchCurrentAttempt = async () => {
    const resp = await axios.get('/api/ChallengeAttempts/current')
    setAttempt(resp.data)
    console.log(resp.data, 'Current Attempt')
  }
  useEffect(() => {
    fetchCurrentAttempt()
  }, [])

  const fetchHollywoodStudiosData = async () => {
    const resp = await axios.get('/api/DWParks/-3/rides')
    setHollywoodStudiosRides(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchHollywoodStudiosData()
  }, [])

  const rideClicked = async ride => {
    const resp = await axios.patch(
      `/api/DWRides/${ride.id}/completed/${attempt.id}`
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
