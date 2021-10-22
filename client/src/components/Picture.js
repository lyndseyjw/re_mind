import React from 'react';
import '../App.css'
import { useMutation } from '@apollo/client';

// import { ADD_PICTURE } from '../utils/mutations';

const styles = {
  button: {
      color: "#ac3b12",
      textDecoration: "none",
      fontWeight: "700",
      background: '#e6d192ff',
      border: "#ac3b12 solid 2px",
      height: "20%",
  }
}

function Picture() {
    function handdleUpload() {
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'ucla-bootcamp-student', 
            uploadPreset: 'qeyacixq'}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
              }
            }
          )
          myWidget.open();
    }
    return(
<button onClick={handdleUpload} id="upload_widget" class="cloudinary-button" style={styles.button}>upload picture</button>
    )
}

export default Picture; 
