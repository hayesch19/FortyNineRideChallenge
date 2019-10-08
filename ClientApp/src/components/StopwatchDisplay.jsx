import React from 'react'

const StopwatchDisplay = props => {
  return (
    <div className={'stopwatch__display'}>
      <span>
        {props.formatTime(props.hours)}:{props.formatTime(props.minutes)}:
        {props.formatTime(props.seconds)}
      </span>
    </div>
  )
}

export default StopwatchDisplay
