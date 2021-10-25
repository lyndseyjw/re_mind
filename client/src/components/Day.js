import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Water from './Water';
import Social from './Social';
import Outside from './Outside';

import Auth from '../utils/auth';

const styles = {
  card: {
      margin: 'auto',
      border: "solid 2px white",
      background: '#579620',
      color: "white",
      borderRadius: "9px",
      alignItems: "center",
      padding: '2%',
      margin: '1%',
  },
  box: {
    justifyContent: "space-around"
  },
  margin: {
    marginTop: '2%'
  },
  buttons: {
    button: {
      color: "#579620ff",
      textDecoration: "none",
      fontWeight: "700",
      background: 'white',
      border: "#b3d993ff solid 2px",
      marginTop: "2%",
    },
    text: {
      color: "#579620ff",
    }
  }
}



const Day = ({ user }) => {

  const [waterTotal, setWaterTotal] = useState(0)
  const [socialTotal, setSocialTotal] = useState(0)
  const [outsideTotal, setOutsideTotal] = useState(0)
  const [intentionText, setIntentionText] = useState('')

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
    <div className="container-fluid">
      <div className="row" style={styles.box}>
      {Auth.loggedIn() ? (
        <>
            <h2 style={styles.margin}>Lovely day, {user.name}</h2>
            <h3>{intentionText ? (`Your intention for the day : ${intentionText}`) : ('')}</h3>
            <div style={styles.card} className='col-lg-5 col-md-11'>
            <Water cupsDrinken={waterTotal} style={styles.buttons}/>
            </div>
            <div style={styles.card} className='col-lg-5 col-md-11'>
            <Social timeEngaged={socialTotal} style={styles.buttons}/>
            </div>
            <div style={styles.card} className='col-11'>
            <Outside timeOutside={outsideTotal} style={styles.buttons} />
            </div>
            <p>Have you taken your picture yet today?</p>
        </>
      ) : (
        <p>
          Please{' '}
          <Link to="/login">login</Link> to view your day
        </p>
      )}
      </div>
    </div>
  );
}

export default Day;