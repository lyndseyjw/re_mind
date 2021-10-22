import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Sleep from './Sleep';
import Intention from './Intention';

import Auth from '../utils/auth';

const Morning = ({ user }) => {

  const [sleepTotal, setSleepTotal] = useState(0)
  const [intentionText, setIntentionText] = useState('')
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

    if (user.intention) {
      let today = '';
      const intention = user.intention.forEach(day => {
        today = day.intentionText
        console.log(day.intentionText)
      })
      console.log(user.intention)
      console.log (today)
      setIntentionText(today)
    }
  })

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
            <h2>Good Morning, {user.name}</h2>
            <Sleep hoursSlept={sleepTotal} />
            <Intention intentionToday={intentionText} />
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