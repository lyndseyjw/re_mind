import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Mood from "./Mood"
import 'react-calendar/dist/Calendar.css';

// this is the calendar on the left side of dashboard that'll show the 30-day calendar, allow for colors

// prop dry  mood into calendar 
//  const [show, setShow] = useState(true);  
 // css --- .red .yellow .green 
 // className = {value === 1 ? red : value === 2 ? yellow : green}
 // apply to calendar to have that class 
export default function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);

  const callModal = () =>{
    setShow(!show) 
   
  } 
  return (
    <section>
      <div>
      < Mood handleClose = {callModal} show = {show}/> 
      </div>
      <Calendar
        onClickDay = {() => setShow(true)}
        onChange={onChange}
        value={value}
      />
    </section>
  );
}

// export default function CalendarPage() {
  // return (
  //   <div>
  //     <Datepicker
  //       marked={[
  //         {
  //           date: new Date(year, month, 2),
  //           color: "#46c4f3",
  //         },
  //         {
  //           date: new Date(year, month, 10),
  //           color: "#7e56bd",
  //         },
  //         {
  //           date: new Date(year, month, 13),
  //           color: "#f13f77",
  //         },
  //         {
  //           date: new Date(year, month, 13),
  //           color: "#89d7c9",
  //         },
  //         {
  //           date: new Date(year, month, 21),
  //           color: "#ffc400",
  //         },
  //         {
  //           date: new Date(year, month, 21),
  //           color: "#8dec7d",
  //         },
  //         {
  //           recurring: {
  //             repeat: "yearly",
  //             month: 4,
  //             day: 1,
  //           },
  //           color: "ffc400",
  //         },
  //       ]}
  //     />
  //   </div>
  // );
// }
