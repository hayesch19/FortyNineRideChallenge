import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stopwatch from '../components/Stopwatch'

const MagicKingdom = () => {
  const [magicKingdomRides, setMagicKingdomRides] = useState([])
  const fetchMagicKingdomData = async () => {
    const resp = await axios.get('https://localhost:5001/api/DWParks/-1/rides')
    setMagicKingdomRides(resp.data)
    console.log(resp.data)
  }

  const [rideCompleted, setRideCompleted] = useState([])

  useEffect(() => {
    fetchMagicKingdomData()
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
        <h2>Magic Kingdom</h2>
        <section className="displayed-rides">
          {magicKingdomRides.map((ride, i) => {
            return (
              <p key={i}>
                {ride.rideName} <span></span>
                <button className="ride-btn" onClick={() => rideClicked(ride)}>
                  Submit
                </button>
              </p>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default MagicKingdom
