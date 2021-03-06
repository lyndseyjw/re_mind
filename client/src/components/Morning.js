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
        if ((moment.unix(night.createdAt / 1000).format('MM/DD/YYYY')) === (moment().format('MM/DD/YYYY'))) {
          return (moment.unix(night.createdAt / 1000).format('MM/DD/YYYY')) === (moment().format('MM/DD/YYYY'))
        }
      })
      const sleep = todaySleep.forEach(night => {
        total += night.hoursSlept
      })
      setSleepTotal(total)
    }

    if (user.intention) {
      let today = '';
      const todayIntention = user.intention.filter(day => {
        if ((moment.unix(day.createdAt / 1000).format('MM/DD/YYYY')) === (moment().format('MM/DD/YYYY'))) {
          return (moment.unix(day.createdAt / 1000).format('MM/DD/YYYY')) === (moment().format('MM/DD/YYYY'))
        }
      })
      const intention = todayIntention.forEach(day => {
        today = day.intentionText
      })
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