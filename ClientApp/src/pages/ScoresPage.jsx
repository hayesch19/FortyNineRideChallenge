import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ScoresPage = () => {
  const [attemptScore, setAttemptScore] = useState([])

  const fetchScoreData = async () => {
    const resp = await axios.get('/api/ChallengeAttempts')
    setAttemptScore(resp.data)
    console.log(resp.data, 'Attempt Scores')
  }
  useEffect(() => {
    fetchScoreData()
  }, [])

  return (
    <main>
      <h2>Scores Page</h2>
      <section className="scores-area">
        {attemptScore.map((attempt, i) => {
          return (
            <div key={i}>
              <p>Time Started: {attempt.timeStarted}</p>
              <p>Time Ended: {attempt.timeEnded}</p>
              <p>Total Time: {attempt.totalTime}</p>
              <p>Rides Completed: {attempt.ridesCompleted}</p>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default ScoresPage
