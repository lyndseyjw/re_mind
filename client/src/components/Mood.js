import React from 'react';
import { useMutation } from '@apollo/client';
import emoji from 'react-easy-emoji'
import Button from 'react-bootstrap/Button'

import { ADD_MOOD } from '../utils/mutations';


// userId, mood 
const Mood = (props) => {

    // class Page extends React.Component {
    //     if (mood === { emoji('Emojis make me 😀') } ) render () {
    //         return <p> 1 </p> 
    //     },
    //     else if (mood === { emoji('Emojis make me 😀') }) render () {
    //         return <p> 2 </p>
    //     },
    //     else { if (mood === { emoji('Emojis make me 😀') } ) render () {
    //             return <p> 3 </p>
    //         },
    //     }
    // }
  
        const [value, setValue] = useState([1, 3]);

    const handleChange = (val) => setValue(val);

    return (

        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={ emoji('Emojis make me 😀') }>
        Option 1
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={ emoji('Emojis make me 😀') }>
        Option 2
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={ emoji('Emojis make me 😀') }>
        Option 3
      </ToggleButton>
    </ToggleButtonGroup>

    )
}

export default Mood;