import React, { useEffect, useState } from 'react'
import Stopwatch from '../components/Stopwatch'
import axios from 'axios'

const HomePage = () => {
  const [parkRides, setParkRides] = useState([])
  const fetchRidesData = async () => {
    const resp = await axios.get('https://localhost:5001/api/DWRides')
    setParkRides(resp.data.rideName)
    console.log(resp.data, 'Magic Kingdom')
  }

  useEffect(() => {
    fetchRidesData()
  }, [])

  return (
    <main>
      <section>
        <div className="timer-area">
          <Stopwatch />
        </div>
        <section className="ride-list-area">
          <div className="magic-kingdom-rides">
            <h2>Magic Kingdom</h2>
            <p>Rides Display Here</p>
          </div>
          <div className="animal-kingdom-rides">
            <h2>Animal Kingdom</h2>
            <p>Rides Display Here</p>
          </div>
          <div className="hollywood-studios-rides">
            <h2>Hollywood Studios</h2>
            <p>Rides Display Here</p>
          </div>
          <div className="epcot-rides">
            <h2>Epcot</h2>
            <p>Rides Display Here</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default HomePage
