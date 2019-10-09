import React from 'react'
import Stopwatch from '../components/Stopwatch'

const HomePage = () => {
  return (
    <main>
      <section>
        <div className="timer-area">
          <Stopwatch />
        </div>
      </section>
    </main>
  )
}

export default HomePage
