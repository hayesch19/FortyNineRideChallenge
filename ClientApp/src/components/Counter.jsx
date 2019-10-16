import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import useInterval from '@use-it/interval'
import countdown from 'countdown'

const Counter = ({ delay = 1000 }) => {
  const [count, setCount] = useState(0)
  const [timeStarted, setTimeStarted] = useState(null)
  const [displayTime, setDisplayTime] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [endAttempt, setEndAttempt] = useState()
  const [resetRides, setResetRides] = useState()

  useInterval(() => {
    if (isRunning) {
      setCount(currentCount => {
        return currentCount + 1
      })
    }
  }, delay)

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
      } else if (data.length === 3) {
        setDisplayTime(
          `${padNumber(data[0])}:${padNumber(data[1])}:${padNumber(data[2])}`
        )
      }
    }
  }, [count])

  useEffect(() => {
    if (timeStarted) {
      setIsRunning(true)
    }
  }, [timeStarted])

  // Start Challenge
  const startTime = async () => {
    if (!isRunning) {
      const resp = await axios.post('/api/ChallengeAttempts', {})
      setTimeStarted(moment(resp.data.timeStarted))
    }
  }

  // End Challenge
  const stopTime = async rides => {
    if (isRunning) {
      setTimeStarted(null)
      setIsRunning(false)
      const resp = await axios.patch(
        `/api/ChallengeAttempts/${endAttempt.id}/ended`
      )
    }
  }

  const resetAllRides = async rides => {
    const resp = await axios.patch('/api/DWRides/completed')
    setResetRides(resp.data)
    console.log(resp.data, 'Rides Reset')
  }

  // Get Current Attempt
  const fetchCurrentAttempt = async () => {
    const resp = await axios.get('/api/ChallengeAttempts/current')
    if (resp.data.timeStarted) {
      setTimeStarted(moment.utc(resp.data.timeStarted))
    }
    setEndAttempt(resp.data)
  }
  useEffect(() => {
    fetchCurrentAttempt()
  }, [])

  // Reset All Park Rides

  return (
    <div className={'stopwatch'}>
      <button onClick={startTime} className="timer-btn">
        START
      </button>
      <button
        onClick={e => {
          stopTime()
          resetAllRides()
        }}
        className="timer-btn"
      >
        STOP
      </button>
      <div className="stopwatch__display">{displayTime}</div>
    </div>
  )
}

export default Counter
