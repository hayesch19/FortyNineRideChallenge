import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Counter from '../components/Counter'

const HollywoodStudios = () => {
  const [attempt, setAttempt] = useState()
  const [rideCompleted, setRideCompleted] = useState([])
  const [hollywoodStudiosRides, setHollywoodStudiosRides] = useState([])

  const square = <FontAwesomeIcon icon={faSquare} />
  const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />

  const fetchCurrentAttempt = async () => {
    const resp = await axios.get('/api/ChallengeAttempts/current')
    setAttempt(resp.data)
    console.log(resp.data, 'Current Attempt')
  }

  const fetchHollywoodStudiosData = async () => {
    const resp = await axios.get('/api/DWParks/-3/rides')
    setHollywoodStudiosRides(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchCurrentAttempt()
    fetchHollywoodStudiosData()
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
    const _rides = [...hollywoodStudiosRides]
    _rides[i].complete = true
    setHollywoodStudiosRides([..._rides])
  }

  return (
    <main>
      <div className="timer-area">
        <Counter />
      </div>
      <h2>Hollywood Studios</h2>
      <div className="ride-list-area">
        <section className="displayed-rides">
          {hollywoodStudiosRides.map((ride, i) => {
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

export default HollywoodStudios
