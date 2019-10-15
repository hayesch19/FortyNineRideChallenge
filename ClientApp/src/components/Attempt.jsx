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
      <section className="score-card">
        <h3>{moment(props.timeStarted).format('MMMM Do YYYY,')}</h3>
        <p>
          <b>Rides Completed:</b> {props.ridesCompleted}
        </p>
        <p>
          <b>Time Started:</b> {moment(props.timeStarted).format('hh:mm a')}
        </p>
        <p>
          <b>Time Ended:</b>{' '}
          {isOnGoing ? 'On Going' : moment(props.timeEnded).format('hh:mm a')}
        </p>
        <p>
          {isOnGoing ? (
            ''
          ) : (
            <>
              Total Time: {duration.get('hours')} hours &amp;{' '}
              {duration.get('minutes')} minutes{' '}
            </>
          )}
        </p>
      </section>
    </>
  )
}

export default Attempt
