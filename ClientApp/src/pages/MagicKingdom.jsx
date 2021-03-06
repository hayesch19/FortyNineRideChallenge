import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Counter from '../components/Counter'

const MagicKingdom = () => {
  const [attempt, setAttempt] = useState()
  const [rideCompleted, setRideCompleted] = useState([])
  const [magicKingdomRides, setMagicKingdomRides] = useState([])

  const square = <FontAwesomeIcon icon={faSquare} />
  const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />

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
    const _rides = [...magicKingdomRides]
    _rides[i].complete = true
    setMagicKingdomRides([..._rides])
  }

  return (
    <main>
      <div className="timer-area">
        <Counter />
      </div>
      <h2>Magic Kingdom</h2>
      <div className="ride-list-area">
        <section className="displayed-rides">
          {magicKingdomRides.map((ride, i) => {
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

export default MagicKingdom
