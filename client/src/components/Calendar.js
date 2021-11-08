import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Mood from "./Mood"
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'


export default function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mood, setMood] = useState(1);
  const callModal = () =>{
    setShow(!show) 
   
  } 
  function newMood(mood) {
    setMood(mood)
  }

  return (
    <section>
      <div>
      < Mood newMood={newMood} mood={mood} handleClose = {callModal} show = {show}/> 
      </div>
      <Calendar tileClassName = {mood === 1 ? 'red' : mood === 2 ? 'yellow' : 'green' }
        onClickDay = {() => setShow(true)}
        onChange={onChange}
        value={value}
        className='calendar'
      />
    </section>
  );
}


