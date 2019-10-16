import React from 'react'
import Stopwatch from '../components/Stopwatch'
import Counter from '../components/Counter'

const HomePage = () => {
  return (
    <main className="landing-page">
      <section>
        <div className="timer-area">
          <h2>Ready To Start The Challenge?</h2>
          {/* <Stopwatch /> */}
          <Counter />
        </div>
      </section>
    </main>
  )
}

export default HomePage
