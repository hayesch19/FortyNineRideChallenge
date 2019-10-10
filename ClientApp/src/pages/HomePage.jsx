import React from 'react'
import Stopwatch from '../components/Stopwatch'

const HomePage = () => {
  return (
    <main className="landing-page">
      <section>
        <div className="timer-area">
          <h2>Ready To Start The Challenge?</h2>
          <Stopwatch />
        </div>
      </section>
    </main>
  )
}

export default HomePage
