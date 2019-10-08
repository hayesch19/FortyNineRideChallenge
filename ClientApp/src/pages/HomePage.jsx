import React, { useEffect } from 'react'
import axios from 'axios'
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
