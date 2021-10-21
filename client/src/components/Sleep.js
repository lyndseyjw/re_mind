// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Form, Button } from 'react-bootstrap'

// import { ADD_SLEEP } from '../utils/mutations';

// const Sleep = ({ hoursSlept }) => {

//     const [sleep, setSleep] = useState('');

//     const handleChange = (e) => {
//         const { value } = e.target;
//         setSleep(value);
//     };

//     const [addSleep, { error }] = useMutation(ADD_SLEEP);

//     const sleepTotal = async (e) => {
//         e.preventDefault();

//         try {
//             const { data } = await addSleep({
//                 variables: {
//                     hoursSlept,
//                 },
//             });

//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div>
//             {hoursSlept ? (
//                 <>
//                     <h3>You slept {hoursSlept} last night</h3>
//                 </>
//             ) : (
//                 <div>
//                     <h3>How many hours of sleep did you get last night?</h3>
//                     <Form.Select onChange={handleChange} aria-label="Default select example">
//                         <option>Choose number of hours</option>
//                         <option value="1">One</option>
//                         <option value="2">Two</option>
//                         <option value="3">Three</option>
//                         <option value="4">Four</option>
//                         <option value="5">Five</option>
//                         <option value="6">Six</option>
//                         <option value="7">Seven</option>
//                         <option value="8">Eight</option>
//                         <option value="9">Nine</option>
//                         <option value="10">Ten</option>
//                         <option value="11">Eleven</option>
//                         <option value="12">Twelve</option>
//                         <option value="13">Thirteen</option>
//                         <option value="14">Fourteen</option>
//                     </Form.Select>
//                     <Button variant="light" type="submit" onSubmit={sleepTotal}>Rested</Button>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Sleep;


