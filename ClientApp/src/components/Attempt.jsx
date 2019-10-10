import React from 'react'
import moment from 'moment'

const Attempt = props => {
  const x = new moment(props.timeStarted)
  const y = new moment(props.timeEnded)
  const duration = moment.duration(y.diff(x))

  return (
    <>
      <h3>{moment(props.timeStarted).format('MMMM Do YYYY,')}</h3>
      <p>Time Started: {moment(props.timeStarted).format('hh:mm a')}</p>
      <p>Time Ended: {moment(props.timeEnded).format('hh:mm a')}</p>
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
