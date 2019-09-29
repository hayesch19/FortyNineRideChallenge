import React from 'react'
import Stopwatch from '../components/Stopwatch'

const HomePage = () => {
  return (
    <main>
      <section>
        <div className="timer-area">
          <Stopwatch />
        </div>
        <section className="ride-list-area">
          <div className="magic-kingdom-rides">
            <h2>Magic Kingdom</h2>
            <div className="dropdown">
              <button className="dropbtn">Select Ride</button>
              <div className="dropdown-content">
                <p>Ride 1</p>
                <p>Ride 2</p>
                <p>Ride 3</p>
              </div>
            </div>
            <p>Rides Display Here</p>
            <p>Rides Display Here</p>
            <p>Rides Display Here</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default HomePage
