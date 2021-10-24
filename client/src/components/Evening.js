import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Water from './Water';
import Gratitude from './Gratitude';
// import Picture from './Picture';
// import Mood from './Mood';

import Auth from '../utils/auth';

import moment from 'moment';

const styles = {
  card: {
    paddingBottom: '30px',
    border: "solid 2px white",
    background: '#5e88ca',
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
      color: "#2455a2",
      textDecoration: "none",
      fontWeight: "700",
      background: 'white',
      border: "#2455a2 solid 2px",
      marginTop: "4%",
    },
    text: {
      color: "#5e88ca",
    }
  },
  intention: {
    textAlign: 'center',
    marginBottom: '40px'
  },
}



const Evening = ({ user }) => {

  const [waterTotal, setWaterTotal] = useState(0)
  const [gratitudeText, setGratitudeText] = useState('')
  const [intentionText, setIntentionText] = useState('')

  useEffect (() => {
    if (user.water) {
      let total = 0;
      const todayWater = user.water.filter(cup => {
        if ((moment.unix(cup.createdAt / 1000).format('MM/DD/YYYY')) === (moment().format('MM/DD/YYYY'))) {
          return (moment.unix(cup.createdAt / 1000).format('MM/DD/YYYY')) === (moment().format('MM/DD/YYYY'))
        }
      })
      const water = todayWater.forEach(cup => {
        total += cup.cups
      })
      setWaterTotal(total)
    }

    if (user.gratitude) {
      let grateful = '';
      console.log('all of users gratitudes',user.gratitude)
      const todayGratitude = user.gratitude.filter(day => {
        if ((moment.unix(day.createdAt / 1000).format('MM/DD/YYYY')) === (moment().format('MM/DD/YYYY'))) {
          return (moment.unix(day.createdAt / 1000).format('MM/DD/YYYY')) === (moment().format('MM/DD/YYYY'))
        }
      })
      console.log('gratitudes only for today',todayGratitude)
      const gratitude = todayGratitude.forEach(great => {
        grateful = great.gratitudeText
      })
      console.log('most recent gratitude from today',grateful)
      setGratitudeText(grateful)
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
            <h2 style={styles.margin}>Good Evening, {user.name}</h2>
            {/* wondering if in the evening we want to ask user if they 'met' their intention & then have this as a row (forget the mongoose term) within the intention document so the row would be "intentionMet" & would be a boolean */}
            <h4 style={styles.intention}>{intentionText ? (`Your intention for the day : ${intentionText}`) : ('')}</h4>
            {/* asking water again .. perhaps we could ask outside & social again? so they can update their time if they want OR add if they haven't yet? not sure if that will make the page too crowded though ... */}
            <div style={styles.card}>
            <Water cupsDrinken={waterTotal} style={styles.buttons}/>
            </div>
            <div style={styles.card}>
            <Gratitude gratitudeToday={gratitudeText} style={styles.buttons}/>
            </div>
            {/* <Picture picture={user.picture} /> */}
            {/* <Mood mood={user.mood} /> */}
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