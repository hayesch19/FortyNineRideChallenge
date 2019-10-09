import React from 'react'
import moment from 'moment'

const Attempt = props => {
  const x = new moment(props.timeStarted)
  const y = new moment(props.timeEnded)
  const duration = moment.duration(y.diff(x))
  console.log(duration.locale('en').humanize())
  console.log(duration.get('hours'))
  console.log(duration.get('minutes'))

  return (
    <>
      <h3>Attempt Score</h3>
      <p>Time Started: {props.timeStarted}</p>
      <p>Time Ended: {props.timeEnded}</p>
      <p>
        Total Time: {duration.get('hours')} hours &amp;&nbsp;
        {duration.get('minutes')} minutes
      </p>
      <p>Rides Completed: {props.ridesCompleted}</p>
    </>
  )
}

export default Attempt

{
  /* <p>humanize: {duration.locale('en').humanize()}</p> */
}
