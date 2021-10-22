import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../utils/mutations';



const styles = {

      button: {
        color: "white",
        textDecoration: "none",
        fontWeight: "700",
        background: 'transparent',
        border: "white solid 2px",
        marginTop: "2%",
      },
      text: {
        color: "#ac3b12",
        border: "white solid 2px",
        borderRadius: "3px"
      },
      journal: {
        padding: '2%',
        margin: '2%',
        border: '2px white solid',
        borderRadius: '9px',
        textAlign: "center",
        background: '#ac3b12',
    }, 
    title:{
        color: "white"
    }
    
}




const ThoughtForm = () => {
  const [formState, setFormState] = useState({
    thoughtText: '',
    thoughtAuthor: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  // Set up our mutation with an option to handle errors
  const [addThought, { error }] = useMutation(ADD_THOUGHT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log("made it!")

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addThought({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'thoughtText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div style={styles.journal}>
      <h3 style={styles.title}>What's on your mind?</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
        style={styles.title}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="thoughtText"
            placeholder="Add your thoughts..."
            value={formState.thoughtText}
            className="form-input w-100"
            onChange={handleChange}
            style={styles.text}
          ></textarea>
        </div>
        {/* <div className="col-12 col-lg-9">
          <input
            name="thoughtAuthor"
            placeholder="Add your name"
            value={formState.thoughtAuthor}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div> */}

        <div className="col-12 col-lg-3">
          <button className="btn btn-block" type="submit" style={styles.button}>
            Add
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ThoughtForm;





