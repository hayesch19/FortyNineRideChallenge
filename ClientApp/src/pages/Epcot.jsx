import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stopwatch from '../components/Stopwatch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Epcot = () => {
  const element = <FontAwesomeIcon icon={faCheckCircle} />

  const [epcotRides, setEpcotRides] = useState([])
  const fetchEpcotData = async () => {
    const resp = await axios.get('https://localhost:5001/api/DWParks/-4/rides')
    setEpcotRides(resp.data)
    console.log(resp.data)
  }

  const [rideCompleted, setRideCompleted] = useState([])

  useEffect(() => {
    fetchEpcotData()
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
        <h2>Epcot</h2>
        <section className="displayed-rides">
          {epcotRides.map((ride, i) => {
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

export default Epcot
