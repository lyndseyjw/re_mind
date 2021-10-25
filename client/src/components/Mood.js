import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"

import { useMutation } from "@apollo/client";
import { ADD_MOOD } from "../utils/mutations";

//Mood Modal Setup
function Mood({handleClose, show}) {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
  const [mood, setMood] = useState(1);
  const [emoji, setEmoji] = useState([
    <span role="img" aria-label="happy-face" id="happy">
      😃
    </span>,
    <span role="img" aria-label="neutral-face" id="nutral">
      😐
    </span>,
    <span role="img" aria-label="sad-face" id="sad">
      🙁
    </span>,
  ]);

  //Modal + Racking Display
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Mood</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="card text-center">
            <div className="card-header bg-primary text-white">
              What is your mood today?
            </div>
            <div className="card-body">
              <p className="card-text">{mood}</p>
              <ul>
                <li>
                  <button onClick={() => setMood(3)}>Happy{emoji[0]}</button>
                </li>
                <li>
                  <button onClick={() => setMood(2)}>Neutral{emoji[1]}</button>
                </li>
                <li>
                  <button onClick={() => setMood(1)}>Sad{emoji[2]}</button>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
export default Mood;
