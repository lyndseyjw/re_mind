import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Sleep from './Sleep';
// import Intention from './Intention';

import Auth from '../utils/auth';

// ok, here is the Auth.loggedIn logic we can use in the Home so that user will either be taken to Login OR to Greeting page when they click the button (rather than having this logic in the Login & Signup page .. will make it nicer for the user)
// here, if they're not logged in, they will be asked to log in & they can click the <Link/> taking them to the Login page
// because we passed in user info as props in the Greeting, that's how we can access their name to give them a greeting, which would be lovely .. again, we probably want to user context instead but I'm not entirely sure yet how to use that & when we would use it so this might also be a Bryan question
// Here we are calling the Sleep & Intention components so far as these are the questions we wanted to ask user in the morning .. the user information is prop drilled into these components so that we can access that data but AGAIN, perhaps we just need to use context
// Kimberly wants to do Sleep & Intention so let's go to the Day page from here ...

const Morning = ({ user }) => {

  const [sleepTotal, setSleepTotal] = useState(0)
  // useEffect (() => {
  //   const sleep = user.sleep.filter(night => {
  //     console.log(moment.unix(night.createdAt).toDate())
  //     return moment.unix(night.createdAt).format('MM/DD/YYYY') === moment().format('MM/DD/YYYY')
  //   })
  //   console.log (sleep)
  //   console.log(user)
  //   console.log(user.sleep)
    // const hoursSlept = sleep.hoursSlept
  // })

  useEffect (() => {
    if (user.sleep) {
      let total = 0;
      const sleep = user.sleep.forEach(night => {
        total += night.hoursSlept
        console.log(night.hoursSlept)
      })
      console.log(user.sleep)
      console.log (total)
      setSleepTotal(total)
    }
  })

  // function calcSleep() {
  //   user.sleep.forEach()
  // }

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
            <h2>Good Morning, {user.name}</h2>
            <Sleep hoursSlept={sleepTotal} />
            {/* <Intention intention={user.intention } /> */}
            <p>Don't forget to take a picture of something that makes you smile today!</p>
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

export default Morning;