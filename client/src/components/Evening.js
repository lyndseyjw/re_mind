import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Water from './Water';
import Gratitude from './Gratitude';
// import Picture from './Picture';
// import Mood from './Mood';

import Auth from '../utils/auth';

const styles = {
  card: {
    margin: 'auto',
    border: "solid 2px white",
    background: '#5e88ca',
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
      color: "#2455a2",
      textDecoration: "none",
      fontWeight: "700",
      background: 'white',
      border: "#2455a2 solid 2px",
      marginTop: "2%",
    },
    text: {
      color: "#5e88ca",
    }
  }
}



const Evening = ({ user }) => {

  const [waterTotal, setWaterTotal] = useState(0)
  const [gratitudeText, setGratitudeText] = useState('')
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

    if (user.gratitude) {
      let grateful = '';
      const gratitude = user.gratitude.forEach(great => {
        grateful = great.gratitudeText
        console.log(great.gratitudeText)
      })
      console.log(user.gratitude)
      console.log (grateful)
      setGratitudeText(grateful)
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
            <h2 style={styles.margin}>Good Evening, {user.name}</h2>
            {/* wondering if in the evening we want to ask user if they 'met' their intention & then have this as a row (forget the mongoose term) within the intention document so the row would be "intentionMet" & would be a boolean */}
            <h3>{intentionText ? (`Your intention for the day : ${intentionText}`) : ('')}</h3>
            {/* asking water again .. perhaps we could ask outside & social again? so they can update their time if they want OR add if they haven't yet? not sure if that will make the page too crowded though ... */}
            <div style={styles.card}>
            <Water cupsDrinken={waterTotal} style={styles.buttons}/>
            </div>
            <div style={styles.card}>
            <Gratitude gratitudeToday={gratitudeText} />
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