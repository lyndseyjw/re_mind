import React from 'react';
import '../App.css'
import { useMutation } from '@apollo/client';

import { ADD_PICTURE } from '../utils/mutations';

const styles = {
  button: {
      color: "#ac3b12",
      textDecoration: "none",
      fontWeight: "700",
      background: 'transparent',
      border: "#ac3b12 solid 2px",
      height: "20%",
  }
}


function Picture() {
  const [addPicture, { error }] = useMutation(ADD_PICTURE);
    function handdleUpload() {
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'ucla-bootcamp-student', 
            uploadPreset: 'qeyacixq'}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                

                try {
                  const { data } = addPicture({
                    variables: { pictureUploaded: result.info.url },
                  });
          
                } catch (err) {
                  console.error(err);
                }

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
