import React from 'react'
import moment from 'moment'

const Attempt = props => {
  // Find Total Time
  const x = new moment(props.timeStarted)
  const y = new moment(props.timeEnded)
  const duration = moment.duration(y.diff(x))

  const isOnGoing = props.timeEnded === null

  return (
    <>
      <h3>{moment(props.timeStarted).format('MMMM Do YYYY,')}</h3>
      <p>Rides Completed: {props.ridesCompleted}</p>
      <p>Time Started: {moment(props.timeStarted).format('hh:mm a')}</p>
      <p>
        Time Ended:{' '}
        {isOnGoing ? 'On Going' : moment(props.timeEnded).format('hh:mm a')}
      </p>
      <p>
        {isOnGoing ? '' : 'Total Time: '}
        {isOnGoing ? '' : duration.get('hours')}
        {isOnGoing ? '' : ' hours '}
        {isOnGoing ? '' : ' & '}
        {isOnGoing ? '' : duration.get('minutes')}
        {isOnGoing ? '' : ' minutes'}
      </p>
    </>
  )
}

export default Attempt
