import React from 'react'
import ReactDOM from 'react-dom'
import RulesAccordion from '../components/RulesAccordion'

const RulesPage = () => {
  return (
    <main className="rules-page">
      <h2>Official Rules</h2>
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
          <RulesAccordion
            title="Important Rules"
            content="Walt Disney World FastPass+ Advance Reservations – If you reserve
            up to 3 FastPasses prior to the day of your run, you must tweet
            the screenshots before your run begins.
            
            Some rides (such as Avatar Flight of Passage) do not allow photos
            while on the ride itself. In these special cases, a photo from the
            final pre-show room or just prior to boarding is acceptable.
            Please wear the 3-D glasses or include images in the photo clearly
            showing that you are within the attraction."
          />
        </div>
        <div className="operating-day">
          <RulesAccordion
            title="The Operating Day"
            content="The day begins at the earliest posted opening time (including Extra
            Magic Hours) for any of the four parks. It ends with the latest
            posted closing time (including Extra Magic Hours).
            
            Park hours will vary. If a park is open past midnight, those late
            hours are considered to be a continuation of the previous day’s
            operating day.
            
            Because hard-ticket events severely limit park capacity, we do not
            allow this Disney challenge during special events, hard-ticket
            events or marketing events such as: 
            Mickey’s Not So Scary Halloween Party
            Mickey’s Very Merry Christmas Party
            Disney After Hours
            Disney Early Morning Magic
            The 24-hour ‘Round the Clock Event
            Special Annual Passholder Events
            Special access provided to Golden Oaks residents
            Special AP or DVC restricted events.
            
            Any additional hours provided outside of normal park hours and the Extra Magic Hours provided to guests staying at resort hotels."
          />
        </div>
        <div className="official-rides-list">
          <RulesAccordion
            title="Official Rides List"
            content="We take our list of rides from the official attractions listing on Disney’s website. If it moves, it’s a ride. Shows such as the Country Bear Jamboree or Great Moments with Mr. Lincoln are attractions but are not rides.

        You can experience rides in any order, but you must ride them all in 1 day. (see below for rules involving ride closures)
        
        Official Walt Disney World Rides:
        Magic Kingdom:
        Main Street Vehicles,
        Walt Disney World Railroad,
        Jungle Cruise,
        Pirates of the Caribbean,
        Magic Carpets of Aladdin,
        Splash Mountain,
        Big Thunder Mountain,
        Rafts to Tom Sawyer Island,
        Liberty Belle Riverboat,
        Haunted Mansion,
        It’s a Small World,
        Peter Pan’s Flight,
        Prince Charming Regal Carousel,
        Many Adventures of Winnie the Pooh,
        Under the Sea — Journey of the Little Mermaid,
        Seven Dwarfs Mine Train,
        Mad Tea Party,
        Dumbo the Flying Elephant,
        Barnstormer,
        Tomorrowland Speedway,
        Tomorrowland Transit Authority PeopleMover,
        Space Mountain,
        Buzz Lightyear Space Ranger Spin,
        AstroOrbiter and
        Carousel of Progress.
        Epcot:
        Spaceship Earth,
        Mission: SPACE,
        Test Track,
        Gran Fiesta Tour,
        Journey Into Imagination,
        Soarin’,
        Living with the Land,
        The Seas with Nemo and Friends and
        Frozen Ever After.
        Disney’s Hollywood Studios:
        Toy Story Midway Mania,
        Star Tours,
        Rock ‘n’ Roller Coaster,
        Twilight Zone Tower of Terror,
        Slinky Dog Dash,
        Alien Swirling Saucers and
        Millennium Falcon Smugglers Run.
        Disney’s Animal Kingdom:
        Kilimanjaro Safari,
        Wildlife Express,
        Kali River Rapids,
        Expedition Everest,
        Dinosaur,
        Primeval Whirl,
        TriceraTop Spin,
        Flight of Passage and
        Na’vi River Journey"
          />
        </div>
        <div className="excluded-attractions">
          <RulesAccordion
            title="Excluded Attractions"
            content="If it’s not on Disney’s website, it’s not on our list. This challenge is for rides only. It does not include any of the following:

        Shows such as Enchanted Tiki Room or Great Moments With Mr. Lincoln
        Exhibits such as the Bakery Tour or World Showcase galleries
        Walk-Through Attractions like the Swiss Family Treehouse
        Parades, Fireworks, or spectacles like Fantasmic
        Walt Disney World Transportation such as the Monorail, Ferryboat, etc. – These are outside the park and are transportation methods, not attractions. They are not part of this Disney challenge.
        Note: At Disneyland, the Monorail is considered an attraction, and therefore must be ridden to complete the Disneyland Resort version of the challenge.
        Epcot FriendShips – These are technically inside the park, but Disney considers them as transportation. They do not appear in the official Disney list of attractions."
          />
        </div>
        <div className="what-constitutes-riding-a-ride">
          <RulesAccordion
            title="What Constitutes “Riding” a Ride?"
            content="You must ride the complete ride unless noted below or in certain on-ride breakdown situations.

          The following are exceptions or have special rules:
          
          Walt Disney World Challenge
          
          Walt Disney World Railroad: The ride lets you get on or off at several different stations. For the purposes of the Parkeology Challenge, riding any one of the railroad legs is sufficient.
          Main Street Vehicles: These come in several varieties — horse cars, omnibus, fire engine, etc. Riding any one vehicle is acceptable. You must ride until they stop and let you off.
          Rides with multiple tracks, such as Space Mountain, Primeval Whirl, Toy Story Mania: Any one track is fine
          Mission: SPACE: You can choose Orange or Green team.
          Tom Sawyer Island: Ride the raft to the island and back. There is no need to explore the non-ride portion of the attraction.
          The Carousel, Main Street Vehicles or any other attraction that you could conceivably jump on, snap a photo, and jump off. You MUST ride the attraction. Jumping on and off only for a photo is cheating."
          />
        </div>
        <div className="bybassing-lines">
          <RulesAccordion
            title="Are You Allowed to Bypass Lines?"
            content="You can use any touring technique or tool available to the average guest. This includes, but is not limited to:

          Walt Disney World Resort
          
          FastPass+,
          Single Rider,
          Extra Magic Hours and
          My Disney Experience app
          You must follow the stated policy for these programs.

          The following techniques are not allowed because they are not available to the average guest:

          Insider access because of your relationship with Cast Members or the Walt Disney Company that allow you to be backdoored onto rides
          Going anywhere backstage.
          Utilizing special “Use Anywhere” paper FastPasses that are sometimes issued by Cast Members as a “Magical Moment” or Guest Recovery.
          Utilizing “Come Back Later” paper FastPasses that are sometimes issued to guests in line when a ride breaks down. We consider unlucky 
          breakdowns to be part of the game and you must adapt to it (see below)
          Line jumping / cutting
          Buying multiple park tickets, such as to gain extra FastPasses
          Borrowing or accepting someone else’s FastPasses
          Leveraging the special nature of the challenge for the purposes of gaining an advantage, such as appealing to other guests to let you 
          go ahead of them because “I’m in a race.”
          Taking advantage of technical glitches or breakdowns in the FastPass+ or MaxPass ride reservation system, that result in you obtaining 
          extra FastPasses outside the normal parameters of the system.
          Violating park rules or general park etiquette, such as disregarding safety, deceiving Cast Members or other guests, or behaving in a disruptive manner."
          />
        </div>
        <div className="outside-assistance">
          <RulesAccordion
            title="Outside Assistance"
            content="Because of the nature of this Disney challenge, we do not allow any outside assistance from friends or family. This includes:

          No personal chauffeur between parks. You must utilize public transportation or something similar available to the average guest.
          Nobody can book FastPasses, monitor wait times, or offer informational assistance on your behalf.
          Teams are welcome to bring or purchase their own food, but no one else can fetch food or provisions for the team.
          Teams must also stick together and cannot split up for competitive advantage. This includes:
          
          No splitting up to fetch food
          No saving spots in line
          No acting as a “runner” for FastPass kiosks.
          No “sitting out” a ride. We’re sympathetic that not everyone can handle every ride, but only by riding everything do you get credit.
          Teams may split up out of necessity for Single Rider lines or common sense things like going to the bathroom.
          Even though the following items are technically available to everyone, we consider them outside the spirit of the Parkeology challenge due to their limited capacity or rare circumstances.
          
          The following are NOT allowed:
          
          Utilizing hard-ticket events like the Mickey’s Not So Scary Halloween Party or the Christmas Party. These events limit capacity, which shortens wait times.
          The Early Morning Magic or Disney After Hours add-on package, which is essentially paying for Extra Magic Hour access.
          Marketing events like the 24-hour ‘Round the Clock operating hours.
          Utilizing additional Fast Passes purchased as a perk of staying on a “Club Level” at a Walt Disney World Resort Hotel. This is available to only a select few guests at a high additional charge.
          AP or DVC events restricted to only those categories of guests
          Utilizing advanced dining reservations for breakfast in order to enter a park early. This is available to a limited number of guests and would unfairly be a way to gain early access to attractions.
          Utilizing Club 33 FastPass benefits which are not available to the average guest."
          />
        </div>
        <div className="substitution">
          <RulesAccordion
            title="Are Substitution Rides Allowed?"
            content="No. You must ride every ride on the list. There is no credit for duplicates.

          "
          />
        </div>
        <div className="park-hopping">
          <RulesAccordion
            title="Park Hopping"
            content="Park hopping takes time but is necessary in order to ride all the rides. Minimize it as much as you can.

          At Walt Disney World, we allow any transportation available to the average guest:
          
          Monorail
          Disney bus
          Disney watercraft
          Disney Skyliner
          Personal vehicle
          Taxi
          Ride Sharing Services like Uber and Lyft
          Minnie Vans
          Walking"
          />
        </div>
      </div>
    </main>
  )
}

export default RulesPage
