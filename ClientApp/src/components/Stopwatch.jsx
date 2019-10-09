import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import countdown from 'countdown'

export default function Stopwatch(props) {
  const [millSeconds, setMillSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [watch, setWatch] = useState(null)
  const [timeStarted, setTimeStarted] = useState(null)
  const [displayTime, setDisplayTime] = useState('')
  const [endAttempt, setEndAttempt] = useState()

  // Timer Logic
  const pace = () => {
    setMillSeconds(prev => prev + 1000)
  }
  const padNumber = num => (num <= 9 ? '0' + num : num)

  useEffect(() => {
    let raw = countdown(
      timeStarted,
      null,
      countdown.HOURS & countdown.MINUTES & countdown.SECONDS
    ).toString()

    if (timeStarted) {
      setDisplayTime(`${padNumber(0)}:${padNumber(0)}:${padNumber(0)}`)

      const data = raw.split(' ').filter(word => parseInt(word))
      if (data.length === 1) {
        setDisplayTime(`${padNumber(0)}:${padNumber(0)}:${padNumber(data[0])}`)
      } else if (data.length === 2) {
        setDisplayTime(
          `${padNumber(0)}:${padNumber(data[0])}:${padNumber(data[1])}`
        )
      } else {
        setDisplayTime(
          `${padNumber(data[0])}:${padNumber(data[1])}:${padNumber(data[2])}`
        )
      }
    }
  }, [millSeconds])

  // Get Current Attempt
  const fetchCurrentAttempt = async () => {
    const resp = await axios.get('/api/ChallengeAttempts/current')
    if (resp.data.timeStarted) {
      setTimeStarted(moment(resp.data.timeStarted))
      setIsRunning(true)
      setWatch(setInterval(() => pace(), 1000))
    }
    setEndAttempt(resp.data)
    console.log(resp.data, 'Current Attempt')
  }
  useEffect(() => {
    fetchCurrentAttempt()
  }, [])

  // Start Challenge
  const startTime = async () => {
    if (!isRunning) {
      console.log('Timer Started')
      setIsRunning(true)
      setWatch(setInterval(() => pace(), 1000))
      const resp = await axios.post('/api/ChallengeAttempts', {})
      console.log(resp.data)
      setTimeStarted(moment(resp.data.timeStarted))
    }
  }

  // End Challenge
  const stopTime = async () => {
    if (isRunning) {
      setIsRunning(false)
      setWatch(current => clearInterval(current))
      const resp = await axios.patch(
        `/api/ChallengeAttempts/${endAttempt.id}/ended`
      )
      console.log(resp.data, 'Timer Stopped')
    }
  }

  return (
    <div className={'stopwatch'}>
      <h2>Ready To Start The Challenge?</h2>
      <button onClick={startTime} className="timer-btn">
        START
      </button>
      <button onClick={stopTime} className="timer-btn">
        STOP
      </button>
      <div>{displayTime}</div>
    </div>
  )
}
