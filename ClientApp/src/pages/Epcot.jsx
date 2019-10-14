import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stopwatch from '../components/Stopwatch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Epcot = () => {
  const [attempt, setAttempt] = useState()
  const [rideCompleted, setRideCompleted] = useState([])
  const [epcotRides, setEpcotRides] = useState([])

  const square = <FontAwesomeIcon icon={faSquare} />
  const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />

  const fetchCurrentAttempt = async () => {
    const resp = await axios.get('/api/ChallengeAttempts/current')
    setAttempt(resp.data)
    console.log(resp.data, 'Current Attempt')
  }

  const fetchEpcotData = async () => {
    const resp = await axios.get('/api/DWParks/-4/rides')
    setEpcotRides(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchCurrentAttempt()
    fetchEpcotData()
  }, [])

  const rideClicked = async (ride, index) => {
    handleCompleted(index)
    const resp = await axios.patch(
      `/api/DWRides/${ride.id}/completed/${attempt.id}`
    )
    setRideCompleted(resp.data)
    ride.completed = true
    console.log(resp.data)
  }

  const handleCompleted = i => {
    const _rides = [...epcotRides]
    _rides[i].complete = true
    setEpcotRides([..._rides])
  }

  return (
    <main>
      <div className="timer-area">
        <Stopwatch />
      </div>
      <h2>Epcot</h2>
      <div className="ride-list-area">
        <section className="displayed-rides">
          {epcotRides.map((ride, i) => {
            return (
              <p key={i}>
                <button
                  className={`ride-btn`}
                  onClick={() => rideClicked(ride, i)}
                >
                  {ride.complete ? thumbsUp : square}
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

export default Epcot
