import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stopwatch from '../components/Stopwatch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const AnimalKingdom = () => {
  const element = <FontAwesomeIcon icon={faCheckCircle} />

  const fetchCurrentAttempt = async () => {
    const resp = await axios.get(
      'https://localhost:5001/api/ChallengeAttempts/current'
    )
    console.log(resp.data, 'Current Attempt')
  }
  useEffect(() => {
    fetchCurrentAttempt()
  }, [])

  const [animalKingdomRides, setAnimalKingdomRides] = useState([])
  const fetchAnimalKingdomData = async () => {
    const resp = await axios.get('https://localhost:5001/api/DWParks/-2/rides')
    setAnimalKingdomRides(resp.data)
    console.log(resp.data)
  }
  const [rideCompleted, setRideCompleted] = useState([])

  useEffect(() => {
    fetchAnimalKingdomData()
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
        <h2>Animal Kingdom</h2>
        <section className="displayed-rides">
          {animalKingdomRides.map((ride, i) => {
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

export default AnimalKingdom
