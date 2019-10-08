import React, { useEffect, useState } from 'react'
import StopwatchDisplay from './StopwatchDisplay.jsx'
import axios from 'axios'
import moment from 'moment'

export default function Stopwatch() {
  const [millSeconds, setMillSeconds] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [watch, setWatch] = useState(null)
  const [timeStarted, setTimeStarted] = useState(null)

  // Format Time
  const formatTime = (val, ...rest) => {
    let value = val.toString()
    if (value.length < 2) {
      value = '0' + value
    }
    if (rest[0] === 'ms' && value.length < 3) {
      value = '0' + value
    }
    return value
  }

  const pace = () => {
    setMillSeconds(prev => prev + 1000)
  }

  useEffect(() => {
    console.log('-----------------')
    console.log(moment())
    console.log(timeStarted)
    if (timeStarted) {
      console.log(moment().diff(timeStarted))
    }
  }, [millSeconds])

  // setInterval(() => {
  //   const now = moment()
  //   const humanReadable = now.format()

  //   console.log(humanReadable)
  // }, 1000)

  function startTime() {
    if (!isRunning) {
      console.log('Timer Started')
      setIsRunning(true)
      setWatch(setInterval(() => pace(), 1000))
      setTimeStarted(moment())
    }
  }

  function stopTime() {
    if (isRunning) {
      console.log('Timer Stopped')
      setIsRunning(false)
      setWatch(current => clearInterval(current))
    }
  }

  const fetchAttemptStart = async () => {
    const resp = await axios.post(
      'https://localhost:5001/api/ChallengeAttempts',
      {}
    )
    console.log(resp.data)
  }
  // useEffect(() => {
  //   fetchAttemptStart()
  // }, [])

  return (
    <div className={'stopwatch'}>
      <h2>Ready To Start The Challenge?</h2>
      <button onClick={startTime} className="timer-btn">
        START
      </button>
      <button onClick={stopTime} className="timer-btn">
        STOP
      </button>
      {/* <button className="timer-btn">RESET</button> */}
      <StopwatchDisplay
        formatTime={formatTime}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  )
}
