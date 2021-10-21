// import React from "react";
// import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import { useMutation } from "@apollo/client";
// import { ADD_MOOD } from "../utils/mutations";

//Mood Modal Setup
// function Mood() {
//   const [mood, setMood] = useState([1, 2, 3]);
//   const [emoji, setEmoji] = useState([
//     <span role="img" aria-label="happy-face" id="happy">
//       😃
//     </span>,
//     <span role="img" aria-label="neutral-face" id="nutral">
//       😐
//     </span>,
//     <span role="img" aria-label="sad-face" id="sad">
//       🙁
//     </span>,
//   ]);

  // MoodRacking Logic 
  // const moodRanking = () => {

  // setEmoji === happy ? 3 : 0,
  // setEmoji === nutral ? 2 : 0,
  // setEmoji === sad ? 1 : 0
  // }
  
 // Modal + Racking Display
  // return (
  //   <Modal.Dialog>
  //     <Modal.Header closeButton>
  //       <Modal.Title>Mood</Modal.Title>
  //     </Modal.Header>

  //     <Modal.Body>
  //       <div className="card text-center">
  //         <div className="card-header bg-primary text-white">
  //           What is your mood today?
  //         </div>
  //         <div className="card-body">
  //           <p className="card-text">{mood}</p>
  //           <ul>
  //             <li>
              {/* ie: connecting moodranking 
              w/ <button onClick={moodRancking.moodemoji[0]}>Happy</button> */}
//                 <button onClick={emoji[0]}>Happy</button>
//               </li>
//               <li>
//                 <button onClick={emoji[1]}>Neutral</button>
//               </li>
//               <li>
//                 <button onClick={emoji[2]}>Sad</button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </Modal.Body>

//       <Modal.Footer>
//         <Button variant="secondary">Close</Button>
//         <Button variant="primary">Save</Button>
//       </Modal.Footer>
//     </Modal.Dialog>
//   );

//   }
// export default Mood;
