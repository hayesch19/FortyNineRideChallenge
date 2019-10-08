import React, { useEffect, useState } from 'react'
import StopwatchDisplay from './StopwatchDisplay.jsx'
import axios from 'axios'
import moment from 'moment'
import countdown from 'countdown'

export default function Stopwatch() {
  const [millSeconds, setMillSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [watch, setWatch] = useState(null)
  const [timeStarted, setTimeStarted] = useState(null)
  const [displayTime, setDisplayTime] = useState('')

  // Format Time & Timer
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
  const padNumber = num => (num <= 9 ? '0' + num : num)

  useEffect(() => {
    console.log('-----------------')
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

  // Start Challenge
  const startTime = async () => {
    if (!isRunning) {
      console.log('Timer Started')
      setIsRunning(true)
      setWatch(setInterval(() => pace(), 1000))
      const resp = await axios.post(
        'https://localhost:5001/api/ChallengeAttempts',
        {}
      )
      console.log(resp.data)

      setTimeStarted(moment(resp.data.timeStarted))
    }
  }

  // End Challenge
  function stopTime() {
    if (isRunning) {
      console.log('Timer Stopped')
      setIsRunning(false)
      setWatch(current => clearInterval(current))
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
      {/* <button className="timer-btn">RESET</button> */}
    </div>
  )
}

// const fetchAttemptStart = async () => {
//   const resp = await axios.post(
//     'https://localhost:5001/api/ChallengeAttempts',
//     {}
//   )
//   console.log(resp.data)
// }
// useEffect(() => {
//   fetchAttemptStart()
// }, [])
{
  /* <StopwatchDisplay
        formatTime={formatTime}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      /> */
}
