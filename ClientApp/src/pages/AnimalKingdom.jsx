import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stopwatch from '../components/Stopwatch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Counter from '../components/Counter'

const AnimalKingdom = () => {
  const [attempt, setAttempt] = useState()
  const [rideCompleted, setRideCompleted] = useState([])
  const [animalKingdomRides, setAnimalKingdomRides] = useState([])

  const square = <FontAwesomeIcon icon={faSquare} />
  const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />

  const fetchCurrentAttempt = async () => {
    const resp = await axios.get('/api/ChallengeAttempts/current')
    setAttempt(resp.data)
    console.log(resp.data, 'Current Attempt')
  }

  const fetchAnimalKingdomData = async () => {
    const resp = await axios.get('/api/DWParks/-2/rides')
    setAnimalKingdomRides(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchCurrentAttempt()
    fetchAnimalKingdomData()
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
    const _rides = [...animalKingdomRides]
    _rides[i].complete = true
    setAnimalKingdomRides([..._rides])
  }

  return (
    <main>
      <div className="timer-area">
        {/* <Stopwatch /> */}
        <Counter />
      </div>
      <h2>Animal Kingdom</h2>
      <div className="ride-list-area">
        <section className="displayed-rides">
          {animalKingdomRides.map((ride, i) => {
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

export default AnimalKingdom
