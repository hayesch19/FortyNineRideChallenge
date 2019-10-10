import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stopwatch from '../components/Stopwatch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const MagicKingdom = () => {
  const [attempt, setAttempt] = useState()
  const [rideCompleted, setRideCompleted] = useState([])
  const [magicKingdomRides, setMagicKingdomRides] = useState([])

  const element = <FontAwesomeIcon icon={faCheckCircle} />

  const fetchCurrentAttempt = async () => {
    const resp = await axios.get('/api/ChallengeAttempts/current')
    setAttempt(resp.data)
    console.log(resp.data)
  }

  const fetchMagicKingdomData = async () => {
    const resp = await axios.get('/api/DWParks/-1/rides')
    setMagicKingdomRides(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchCurrentAttempt()
    fetchMagicKingdomData()
  }, [])

  const rideClicked = async ride => {
    const resp = await axios.patch(
      `/api/DWRides/${ride.id}/completed/${attempt.id}`
    )
    setRideCompleted(resp.data)
    ride.completed = true
    console.log(resp.data)
  }

  return (
    <main>
      <div className="timer-area">
        <Stopwatch />
      </div>
      <h2>Magic Kingdom</h2>
      <div className="ride-list-area">
        <section className="displayed-rides">
          {magicKingdomRides.map((ride, i) => {
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

export default MagicKingdom
