
import React from 'react';
import '../App.css'
import { useMutation } from '@apollo/client';


// import { ADD_PICTURE } from '../utils/mutations';


// Cloudinary Setup
class Picture extends React.Component{
    state = {
      imageUrl: null,
      imageAlt: null,
    }
  
    render() {
      const { imageUrl, imageAlt } = this.state;

    //   handleImageUpload = () => {
    //     const { files } = document.querySelector('input[type="file"]')
    //     console.log('Image file', files[0])
    //   }

      return (
        <main className="Picture">
          <section className="left-side">
            <form>
              <div className="form-group">
                <input type="file"/>
              </div>
  
              <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
              <button type="button" className="btn widget-btn">Upload Via Widget</button>
            </form>
          </section>
          <section className="right-side">
            <p>The resulting image will be displayed here</p>
            {imageUrl && (
              <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
            )}
          </section>
        </main>
      );
    }
  }
  
  export default Picture;

// const Picture = ({ userId, picture }) => {

//     // I think we will include this error down below if the user does not upload a picture before clicking Submit (similar to how used in Intention component)
//     // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
//     const [addPicture, { error }] = useMutation(ADD_PICTURE);

//     const pictureSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const { data } = await addPicture({
//                 variables: {
//                     userId,
//                     // pictureUploaded,
//                 },
//             });

//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div>
//             {picture ? (
//             <>
//                 <h3>This made you smile today :</h3>
//                 <img src={picture}></img>
//             </>
//           ) : (
//             <div>
//                 <h3>Upload that picture you took of something that made you smile today</h3>
//                 {/* here we will need to add the cloudserver stuffff */}

// const Picture = ({ userId, picture }) => {

    // I think we will include this error down below if the user does not upload a picture before clicking Submit (similar to how used in Intention component)
    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    // const [addPicture, { error }] = useMutation(ADD_PICTURE);

    // const pictureSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const { data } = await addPicture({
    //             variables: {
    //                 userId,
                    // pictureUploaded,
    //             },
    //         });

    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // return (
    //     <div>
    //         {picture ? (
    //         <>
    //             <h3>This made you smile today :</h3>
    //             <img src={picture}></img>
    //         </>
    //       ) : (
    //         <div>
    //             <h3>Upload that picture you took of something that made you smile today</h3>
                {/* here we will need to add the cloudserver stuffff */}

//                 <button type="submit" onSubmit={pictureSubmit}>Happiness looks great on you</button>
//             </div>
//           )}
//         </div>
//     )
// }


//THIS IS FROM CLOUDINARY REACT: https://cloudinary.com/documentation/react2_quick_start 

// // 1. Import classes
// // ==================

// import React from 'react'
// import {AdvancedImage} from '@cloudinary/react';
// import {Cloudinary} from "@cloudinary/url-gen";

// // Import any actions required for transformations.
// import {fill} from "@cloudinary/url-gen/actions/resize";

// const App = () => {


//   // 2. Set your cloud name
//   //========================

//   // Create a Cloudinary instance and set your cloud name.
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: 'demo'
//     }
//   });


//   // 3. Get your image
//   //===================

//   // Instantiate a CloudinaryImage object for the image with the public ID, 'sample'.
//   const myImage = cld.image('sample'); 


//   // 4. Transform your image
//   //=========================

//   // Resize to 250 x 250 pixels using the 'fill' crop mode.
//   myImage.resize(fill().width(250).height(250));


//   // 5. Deliver your image
//   // =========================

//   // Render the image in a React component.
//   return (
//     <div>
//       <AdvancedImage cldImg={myImage} />
//     </div>
//   )

// };


// export default Picture;