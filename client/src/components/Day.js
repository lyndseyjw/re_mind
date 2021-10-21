import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Water from './Water';
import Social from './Social';
import Outside from './Outside';

import Auth from '../utils/auth';

// here we are accessing user data to give them a greeting & then, IF there is intention data for this user FOR THIS DAY specifically, then we could display it for them as motivation throughout the day .. I think here is where we will need to make sure that logic in Water component is correct for querying data specific to the day is correct .. once we get that query down, that can be used throughout the app to display to the user their activity
// here we call Water Social & Outside components & pass in user info as props so that we can access this information
// lets go to water from here ...

const Day = ({ user }) => {

  const [waterTotal, setWaterTotal] = useState(0)
  const [socialTotal, setSocialTotal] = useState(0)
  const [outsideTotal, setOutsideTotal] = useState(0)

  useEffect (() => {
    if (user.water) {
      let total = 0;
      const water = user.water.forEach(input => {
        total += input.cups
        console.log(input.cups)
      })
      console.log(user.water)
      console.log (total)
      setWaterTotal(total)
    }

    if (user.social) {
      let total = 0;
      const social = user.social.forEach(input => {
        total += input.minutesEngaged
        console.log(input.minutesEngaged)
      })
      console.log(user.social)
      console.log (total)
      setSocialTotal(total)
    }

    if (user.outside) {
      let total = 0;
      const outside = user.outside.forEach(input => {
        total += input.minutesOutside
        console.log(input.minutesOutside)
      })
      console.log(user.outside)
      console.log (total)
      setOutsideTotal(total)
    }
  })

  return (
    <div>

      {Auth.loggedIn() ? (
        <>
            <h2>Lovely day, {user.name}</h2>
            {/* <p>{user.intention.intentionText ? (`Your intention for the day : ${user.intention.intentionText}`) : ('')}</p> */}
            <Water cupsDrinken={waterTotal} />
            <Social timeEngaged={socialTotal} />
            <Outside timeOutside={outsideTotal} />
            <p>Have you taken your picture yet today?</p>
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

export default Day;