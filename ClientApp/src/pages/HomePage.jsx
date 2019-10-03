import React, { useEffect, useState } from 'react'
import Stopwatch from '../components/Stopwatch'
import RideNav from '../components/RideNav'
import axios from 'axios'

const HomePage = () => {
  const [magicKingdomRides, setMagicKingdomRides] = useState([])
  const fetchMagicKingdomData = async () => {
    const resp = await axios.get('https://localhost:5001/api/DWParks/-1/rides')
    setMagicKingdomRides(resp.data)
    console.log(resp.data)
  }

  const [animalKingdomRides, setAnimalKingdomRides] = useState([])
  const fetchAnimalKingdomData = async () => {
    const resp = await axios.get('https://localhost:5001/api/DWParks/-2/rides')
    setAnimalKingdomRides(resp.data)
    console.log(resp.data)
  }

  const [hollywoodStudiosRides, setHollywoodStudiosRides] = useState([])
  const fetchHollywoodStudiosData = async () => {
    const resp = await axios.get('https://localhost:5001/api/DWParks/-3/rides')
    setHollywoodStudiosRides(resp.data)
    console.log(resp.data)
  }

  const [epcotRides, setEpcotRides] = useState([])
  const fetchEpcotData = async () => {
    const resp = await axios.get('https://localhost:5001/api/DWParks/-4/rides')
    setEpcotRides(resp.data)
    console.log(resp.data)
  }

  const [rideCompleted, setRideCompleted] = useState([])

  useEffect(() => {
    fetchMagicKingdomData()
    fetchAnimalKingdomData()
    fetchHollywoodStudiosData()
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
      <section className="ride-navbar">
        <RideNav />
      </section>
      <section>
        <div className="timer-area">
          <Stopwatch />
        </div>
        <section className="ride-list-area">
          <div className="magic-kingdom-rides">
            <h2>Magic Kingdom</h2>
            <section>
              {magicKingdomRides.map((ride, i) => {
                return (
                  <p key={i}>
                    {ride.rideName} <span></span>
                    <button
                      className="ride-btn"
                      onClick={() => rideClicked(ride)}
                    >
                      Submit
                    </button>
                  </p>
                )
              })}
            </section>
          </div>
          <div className="animal-kingdom-rides">
            <h2>Animal Kingdom</h2>
            <section>
              {animalKingdomRides.map((ride, i) => {
                return (
                  <p key={i}>
                    {ride.rideName} <span></span>
                    <button
                      className="ride-btn"
                      onClick={() => rideClicked(ride)}
                    >
                      Submit
                    </button>
                  </p>
                )
              })}
            </section>
          </div>
          <div className="hollywood-studios-rides">
            <h2>Hollywood Studios</h2>
            <section>
              {hollywoodStudiosRides.map((ride, i) => {
                return (
                  <p key={i}>
                    {ride.rideName} <span></span>
                    <button
                      className="ride-btn"
                      onClick={() => rideClicked(ride)}
                    >
                      Submit
                    </button>
                  </p>
                )
              })}
            </section>
          </div>
          <div className="epcot-rides">
            <h2>Epcot</h2>
            <section>
              {epcotRides.map((ride, i) => {
                return (
                  <p key={i}>
                    {ride.rideName} <span></span>
                    <button
                      className="ride-btn"
                      onClick={() => rideClicked(ride)}
                    >
                      Submit
                    </button>
                  </p>
                )
              })}
            </section>
          </div>
        </section>
      </section>
    </main>
  )
}

export default HomePage
