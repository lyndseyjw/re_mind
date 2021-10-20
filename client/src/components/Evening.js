import React from 'react';
import { Link } from 'react-router-dom';

import Water from './Water';
import Gratitude from './Gratitude';
import Picture from './Picture';
import Mood from './Mood';

import Auth from '../utils/auth';

// below were some ideas of what we could ask the user at the end of the day i.e. was their intention met & also if we wanted to ask Water Social Outside again for them to add on time
// ok SO, as a nice flow through the day for the user, once they submit their mood ranking, that submit button could take them to the Dashboard / Journal page, which would show them all of their data for the day .. from here, there could be a link that would then render their data for the week / month, etc. However we think would be a nice user experience!
// ok I think I covered everything & I think this tentative outline helps to accomplish what we envisioned originally .. let me know if that helps or DOESNT & Ill try & answer Slack throughout the day if there are any questions  
// again, feel free to move things around / change .. just wanted to put something down that allowed us to actually see our vision on the 'page' in code (which at least helps me to understand the flow better & where queries / data will go, etc)

const Evening = ({ user }) => {

    return (
        <div>
    
          {Auth.loggedIn() ? (
            <>
                <h2>Good Evening, {user.name}</h2>
                {/* wondering if in the evening we want to ask user if they 'met' their intention & then have this as a row (forget the mongoose term) within the intention document so the row would be "intentionMet" & would be a boolean */}
                <p>{user.intention.intentionText ? (`Your intention for the day : ${intentionText}`) : ('')}</p>
                {/* asking water again .. perhaps we could ask outside & social again? so they can update their time if they want OR add if they haven't yet? not sure if that will make the page too crowded though ... */}
                <Water water={user.water} />
                <Gratitude gratitude={user.gratitude} />
                <Picture picture={user.picture} />
                <Mood mood={user.mood} />
            </>
          ) : (
            <p>
              Please{' '}
              <Link to="/login">login</Link> to view your day
            </p>
          )}
        </div>
      );
}

export default Evening;