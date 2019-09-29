import React from 'react'

const RulesPage = () => {
  return (
    <main>
      <h2>Offical Rules</h2>
      <div className="rules-area">
        <p>
          This is the toughest Disney ride challenge: a theme park race against
          the clock!
        </p>
        <p>
          The objective is to ride all the open rides in a single operating day.
        </p>
        <ul>
          <li>
            At Walt Disney World, you must visit all 4 parks — Magic Kingdom,
            Epcot, Disney’s Hollywood Studios, and Disney’s Animal Kingdom.
          </li>
          <li>
            At Disneyland Resort, you must visit both Disneyland Park and Disney
            California Adventure.
          </li>
        </ul>
        <p>
          For the most extreme version of the challenge, you must wait for a day
          with no rides closed for refurbishment and then attempt to ride EVERY
          SINGLE RIDE in one single normal operating day.
        </p>
        <div className="important-rules">
          <h3>Important Rules</h3>
          <ul>
            <li>
              Walt Disney World FastPass+ Advance Reservations – If you reserve
              up to 3 FastPasses prior to the day of your run, you must tweet
              the screenshots before your run begins.
            </li>
            <li>
              Some rides (such as Avatar Flight of Passage) do not allow photos
              while on the ride itself. In these special cases, a photo from the
              final pre-show room or just prior to boarding is acceptable.
              Please wear the 3-D glasses or include images in the photo clearly
              showing that you are within the attraction.
            </li>
          </ul>
        </div>
        <div className="operating-day">
          <h3>The Operating Day</h3>
          <p>
            The day begins at the earliest posted opening time (including Extra
            Magic Hours) for any of the four parks. It ends with the latest
            posted closing time (including Extra Magic Hours).
          </p>
          <p>
            Park hours will vary. If a park is open past midnight, those late
            hours are considered to be a continuation of the previous day’s
            operating day.
          </p>
          <p>
            Because hard-ticket events severely limit park capacity, we do not
            allow this Disney challenge during special events, hard-ticket
            events or marketing events such as:
          </p>
          <ul>
            <li>Mickey’s Not So Scary Halloween Party</li>
            <li>Mickey’s Very Merry Christmas Party.</li>
            <li>Disney After Hours</li>
            <li>Disney Early Morning Magic</li>
            <li>The 24-hour ‘Round the Clock Event</li>
            <li>Special Annual Passholder Events</li>
            <li>Special access provided to Golden Oaks residents</li>
            <li>Special AP or DVC restricted events.</li>
            <li>
              Any additional hours provided outside of normal park hours and the
              Extra Magic Hours provided to guests staying at resort hotels.
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default RulesPage
