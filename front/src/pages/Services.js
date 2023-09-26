// import React, { useEffect, useState } from "react";

// function App() {
//   const [baseImage, setBaseImage] = useState([]);
//   console.log(baseImage);
//   const uploadImage = (e) => {
//     e.preventDefault();
//     for (let i = 0; i < e.target.files.length; i++) {
//       const file = e.target.files[i];
//       let reader = new FileReader();
//       reader.onload = () => {
//         baseImage.push(reader.result);
//       };
//       reader.onerror = () => {
//         console.log("Error");
//       };
//       reader.readAsDataURL(file);
//     }
//     console.log(baseImage);
//   };

//   const deleteimg = (deleteimgid) => {
//     const handleDelete = baseImage.filter((item) => item !== deleteimgid);
//     setBaseImage(handleDelete);
//     console.log(baseImage);
//   };
//   return (
//     <div className="App">
//       <div>
//         <label htmlFor="inputimg" className="btn btn-primary">
//           upload
//         </label>
//       </div>
//       <input
//         accept=".jpg,.jpeg,.png"
//         multiple
//         type="file"
//         onChange={uploadImage}
//         id="inputimg"
//         style={{ display: "none" }}
//       />
//       <br></br>
//       {localStorage.getItem("userInfo") &&
//         baseImage.map((item, id) => {
//           return (
//             <div className="col-3 d-flex" key={id}>
//               <div className="card">
//                 <img src={item} alt="img-preview" width={400} />
//                 <button onClick={() => deleteimg(item)}>remove</button>
//               </div>
//             </div>
//           );
//         })}
//       {/* <img src={baseImage[0]} alt="img-preview" width={400} />
//       <img src={baseImage[1]} alt="img-preview" width={400} />
//       <img src={baseImage[2]} alt="img-preview" width={400} />
//       <img src={baseImage[3]} alt="img-preview" width={400} /> */}
//     </div>
//   );
// }

// export default App;
