import React from 'react';
import '../App.css'
import { useMutation } from '@apollo/client';

// import { ADD_PICTURE } from '../utils/mutations';

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
<button onClick={handdleUpload} id="upload_widget" class="cloudinary-button">Upload files</button>
    )
}

export default Picture; 