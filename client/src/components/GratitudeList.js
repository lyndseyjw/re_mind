import React, { useState } from 'react';
// import GratitudeForm from './GratitudeForm';
// import Gratitude from './Gratitude';

// import { useMutation } from '@apollo/client';
// import { ADD_GRATITUDE } from '../utils/mutations';


function GratitudeList() {
  const [gratitude, setGratitude] = useState([]);

  // Function to add a bucket list item
  const addGratitudeItem = (item) => {
    console.log(
      '🚀 ~ file: GratitudeList.js ~ line 10 ~ addBucketItem ~ item',
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new bucket list item to the existing array of objects
    const newGratitude = [item, ...gratitude];
    console.log(newGratitude);

    // Call setBucket to update state with our new set of bucket list items
    setGratitude(newGratitude);
  };

  // Function to mark bucket list item as complete
  const completeGratitudeItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedGratitude = gratitude.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedGratitude);
    setGratitude(updatedGratitude);
  };

  // Function to remove bucket list item and update state
  const removeGratitudeItem = (id) => {
    const updatedGratitude = [...gratitude].filter((item) => item.id !== id);

    setGratitude(updatedGratitude);
  };

  // Function to edit the bucket list item
  const editGratitudeItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setGratitude((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What are you greatful for today?</h1>
      <GratitudeForm onSubmit={addGratitudeItem} />
      <Gratitude
        gratitude={gratitude}
        completeGratitudeItem={completeGratitudeItem}
        removeGratitudeItem={removeGratitudeItem}
        editGratitudeItem={editGratitudeItem}
      ></Gratitude>
    </div>
  );
}

export default GratitudeList;


