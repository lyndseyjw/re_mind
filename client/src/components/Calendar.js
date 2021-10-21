import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

//this is the calendar on the left side of dashboard that'll show the 30-day calendar, allow for colors


export default function CalendarPage() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
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
