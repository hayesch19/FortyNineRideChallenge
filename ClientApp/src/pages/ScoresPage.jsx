import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Attempt from '../components/Attempt'

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
    <main className="scores-page">
      <h2>Scores Page</h2>
      <section className="scores-area">
        {attemptScore.map((attempt, i) => {
          return (
            <div key={i}>
              <Attempt {...attempt} />
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default ScoresPage
