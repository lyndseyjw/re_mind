import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Sleep from './Sleep';
import Intention from './Intention';

import Auth from '../utils/auth';
import { totalmem } from 'os';

const styles = {
  card: {
    margin: 'auto',
    paddingBottom: '30px',
    border: "solid 2px white",
    background: '#db8d17',
    color: "white",
    borderRadius: "9px",
    alignItems: "center",
    padding: '2%',
    margin: '40px auto',
    width: '60%',
    boxShadow: '30px 20px 60px rgba(0,0,0,.8)'
  },
  box: {
    justifyContent: "space-around"
  },
  margin: {
    marginTop: '60px',
    marginBottom: '40px',
    textAlign: 'center',
    fontSize: '42px',
    color: 'white'
  },
  buttons: {
    button: {
      color: "#ffb300ff",
      textDecoration: "none",
      fontWeight: "700",
      background: 'white',
      border: "#ffb300ff solid 2px",
      marginTop: "2%",
    },
    text: {
      color: "#ffb300ff",
    }
  },
  pStyle: {
    marginTop: '40px',
    textAlign: 'center'
  }
}



const Morning = ({ user }) => {

  const [sleepTotal, setSleepTotal] = useState(0)
  const [intentionText, setIntentionText] = useState('')

  useEffect (() => {
    if (user.sleep) {
      let total = 0;
      const todaySleep = user.sleep.filter(night => {
        console.log('moment unix :',moment.unix(night.createdAt / 1000).format('MM/DD/YYYY'))
        return moment.unix(night.createdAt / 1000).format('MM/DD/YYYY') === moment().format('MM/DD/YYYY')
      })
      console.log ('all sleep from today :',todaySleep)
      console.log(user)
      console.log(user.sleep)
      const sleep = todaySleep.forEach(night => {
        total += night.hoursSlept
        console.log(night.hoursSlept)
      })
      console.log('today sleep totaled :',total)
      setSleepTotal(total)
      // const hoursSlept = sleep.hoursSlept
    }
  })

  useEffect(() => {
    // if (user.sleep) {
    //   let total = 0;
    //   const todaySleep = user.sleep.filter(night => {
    //     console.log('created at moment',moment(night.createdAt).format('MM/DD/YYYY'))
    //     return moment(night.createdAt).format('MM/DD/YYYY') === moment().format('MM/DD/YYYY')
    //   })
      
    //   console.log('All sleep from today:',todaySleep)
    //   const sleep = todaySleep.forEach(night => {
    //     total += night.hoursSlept
    //     console.log(night.hoursSlept)
    //   })
    //   console.log('user sleep data :',user.sleep)
    //   console.log('sleep from today totaled :',total)
    //   setSleepTotal(total)
    // }

    if (user.intention) {
      let today = '';
      const intention = user.intention.forEach(day => {
        today = day.intentionText
        console.log(day.intentionText)
      })
      console.log(user.intention)
      console.log(today)
      setIntentionText(today)
    }
  })

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <h2 style={styles.margin}>Good Morning, {user.name}</h2>
          <div style={styles.card}>
            <Sleep hoursSlept={sleepTotal} style={styles.buttons} />
          </div>
          <div style={styles.card}>
            <Intention intentionToday={intentionText} style={styles.buttons} />
          </div>
          <h4 style={styles.pStyle}>Don't forget to take a picture of something that makes you smile today!</h4>
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