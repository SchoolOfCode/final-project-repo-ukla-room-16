


















// import React from 'react'
// import {AdvancedImage} from '@cloudinary/react';
// import {cloudinary} from "@cloudinary/url-gen";

// const cloudinary_name = '';
// const cloudinary_api_key = '';

// export default function Gallery(cloudPath, width, height) {
//   cloudinary.config({ 
//     cloud_name: cloudinary_name,
//     api_key: cloudinary_api_key
//   });
//    var url = cloudinary.url(cloudPath, 
//               {
//                width: width, 
//                height: height,
//                crop: "fill"
//    });

//   return (
//    <div>
//         <h1>My Images</h1>

//         <h2>Images</h2>

//         <ul>
//           {images.map(image => {
//             return (
//               <li key={image.id}>
//                 <a href={image.link} rel="noreferrer">
//                   <div>
//                     <Image width={image.width} height={image.height} src={image.image} alt="" />
//                   </div>
//                   <h3>
//                     { image.title }
//                   </h3>
//                 </a>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
   
//   )
// }