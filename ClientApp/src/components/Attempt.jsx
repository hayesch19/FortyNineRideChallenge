import React from 'react'
import moment, { invalid } from 'moment'

const Attempt = props => {
  // Find Total Time
  const x = new moment(props.timeStarted)
  const y = new moment(props.timeEnded)
  const duration = moment.duration(y.diff(x))

  const isOnGoing = props.timeEnded === null
  console.log(isOnGoing)

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
        {isOnGoing ? '' : 'Total Time:'}&nbsp;
        {isOnGoing ? '' : duration.get('hours')}&nbsp;
        {isOnGoing ? '' : 'hours'}&nbsp;
        {isOnGoing ? '' : '&'}&nbsp;
        {isOnGoing ? '' : duration.get('minutes')}&nbsp;
        {isOnGoing ? '' : 'minutes'}
      </p>
    </>
  )
}

export default Attempt

{
  /* <p>humanize: {duration.locale('en').humanize()}</p> */
  // Total Time: {isOnGoing ? 'On Going' : duration.get('hours')} hours
  // &amp;&nbsp; {isOnGoing ? '' : duration.get('minutes')} minutes
}
