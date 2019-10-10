import React, { useEffect, useState } from 'react'
import StopwatchDisplay from './StopwatchDisplay.jsx'
import axios from 'axios'

class Stopwatch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
      currentTimeHr: 0
    }
  }
  formatTime = (val, ...rest) => {
    let value = val.toString()
    if (value.length < 2) {
      value = '0' + value
    }
    if (rest[0] === 'ms' && value.length < 3) {
      value = '0' + value
    }
    return value
  }

  start = () => {
    // const [attemptStart, setAttemptStart] = useState([])
    const fetchAttemptStart = async () => {
      const resp = await axios.post('/api/ChallengeAttempts')
      // setAttemptStart(resp.data)
      console.log(resp.data, 'Challenge Started!')
    }
    if (!this.state.running) {
      this.setState({ running: true })
      this.watch = setInterval(() => this.pace(), 10)
    }
    useEffect(() => {
      fetchAttemptStart()
    }, [])
  }

  stop = () => {
    this.setState({ running: false })
    clearInterval(this.watch)
  }

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 })
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 })
      this.setState({ currentTimeMs: 0 })
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 })
      this.setState({ currentTimeSec: 0 })
    }
    if (this.state.currentTimeMin >= 60) {
      this.setState({ currentTimeHr: this.state.currentTimeHr + 1 })
      this.setState({ currentTimeMin: 0 })
    }
  }

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
      currentTimeHr: 0
    })
  }

  render() {
    return (
      <div className={'stopwatch'}>
        <h2>Ready To Start The Challenge?</h2>
        {this.state.running === false && (
          <button className="timer-btn" onClick={this.start}>
            START
          </button>
        )}
        {this.state.running === true && (
          <button className="timer-btn" onClick={this.stop}>
            STOP
          </button>
        )}
        <button className="timer-btn" onClick={this.reset}>
          RESET
        </button>
        <StopwatchDisplay
          ref="display"
          {...this.state}
          formatTime={this.formatTime}
        />
      </div>
    )
  }
}

export default Stopwatch