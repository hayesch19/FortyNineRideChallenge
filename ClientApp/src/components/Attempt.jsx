import React from 'react'
import moment from 'moment'

const Attempt = props => {
  // Find Total Time
  const x = new moment.utc(props.timeStarted)
  const y = new moment.utc(props.timeEnded)
  const duration = moment.duration(y.diff(x))

  const isOnGoing = props.timeEnded === null

  return (
    <>
      <section className="score-card">
        <h3>{moment.utc(props.timeStarted).format('MMMM Do YYYY')}</h3>
        <p>
          <b>Rides Completed:</b> {props.ridesCompleted}
        </p>
        <p>
          <b>Time Started:</b>{' '}
          {moment(moment.utc(props.timeStarted).toDate())
            .local()
            .format('hh:mm a')}
        </p>
        <p>
          <b>Time Ended:</b>{' '}
          {isOnGoing
            ? 'On Going'
            : moment(moment.utc(props.timeEnded).toDate())
                .local()
                .format('hh:mm a')}
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
