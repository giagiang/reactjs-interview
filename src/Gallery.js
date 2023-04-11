// import {useState} from 'react';
// import { sculptureList } from './data';

// export default function Gallery(){
//   let [index, setIndex] = useState(0);
//   let [showmore, setShowmore] = useState(false);
//   function handelNextClick (){
//     setIndex(index + 1);
//   }
//   function handelmoreClick(){
//     setShowmore(!showmore);
//   }
//   let sculpture = sculptureList[index];
//   return (
//     <section>
//       <button onclick = {handelNextClick}>
//         next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1}of {sculptureList.length})
//       </h3>
//       <button onclick ={handelmoreClick}>
//         {showmore ? 'hide' : 'show'} detail
//       </button>
//       {showmore && <p>sculpture.description</p>}
//       <img 
//         src = {sculpture.url}
//         alt = {sculpture.alt}
//       />
//     </section>
//   )
// }