import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const ScoresPage = () => {
  const [attemptScore, setAttemptScore] = useState()

  const fetchScoreData = async () => {
    const resp = await Axios.get('https://localhost:5001/api/ChallengeAttempts')
    setAttemptScore(resp.data)
    console.log(resp.data, 'Attempt Scores')
  }
  useEffect(() => {
    fetchScoreData()
  }, [])

  return (
    <main>
      <h2>Scores Page</h2>
      <div className="scores-area">
        <p>Scores Go Here</p>
      </div>
    </main>
  )
}

export default ScoresPage
