// import Gallery from './Gallery.js';
// export  default function Page(){
//   return(
//     <div className = "page">
//         <Gallery />
//         <Gallery />
//         <Gallery />

//     </div>
//   )
// }




// import {useState} from 'react';

// export default function Feedbackfrom(){
//   // let [name, setName] = useState('');
//   function handelClick(){
//     let name = prompt('what is your name ?')  ;
//     alert (`hello , ${name}!`);
//   }
//   return (
//     <button onclick = {handelClick}>
//       Greet
//     </button>
//   );
// }



// import { sculptureList } from "./data";
// import {useState} from  "react";
// export default function Gallery(){
//   let [index,setIndex] = useState(0);
  
//   function handelClick(){
//     setIndex(index + 1) ;
//   }
//   let sculpture = sculptureList [index];
//   return (
//     <>
//       <button  onClick = {handelClick}>
//         next
//       </button>
//       <h2>
//         <i>{sculpture.name} by {sculpture.artist}</i>
//       </h2>
//       <h3> 
//       ({index +1 } of {sculptureList.length })
//       </h3>
//       <img
//         src = {sculpture.url}
//         alt = {sculpture.alt}
//       />
//       <p> {sculpture.description}</p>
//     </>
//   )
// }



// import { useState } from 'react';

// export default function Form() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('Hi!');
//   if (isSent) {
//     return <h1>Your message is on its way!</h1>;
//   }
//   function handleSubmit(e){
//       console.log(e.target.value)
//       debugger;
//       e.preventDefault();
//       setIsSent(true);
//       sendMessage(message);
//   }
//   function handleChange(event){
//     console.log("handel change ", event.target.value);
//     setMessage(event.target.value);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//     <textarea placeholder="Message" value={message} onchange={handleChange}/>
//     <button type="submit">send</button>
//     </form>
//   );
// }
  
// function sendMessage(message) {
//   // ...
// }



// import {useState}from 'react';

// export default function Counter(){
//  let[number, setNumber ] = useState(0);
  
//  return( 
//   <>
//     <h1>{number}</h1>
//     <button onclick = {() => {
//       setNumber (number + 5 );
//       setTimeout(() => {alert(number);
//       },3000) 
//     }}>+5</button>
//   </>
//  )
// }





// export default function App(){
//   return (
//     <Toolbar 
//     onPlayMovie = {() => alert('playing') }
//     onUploadImage = {() =>alert('hello, ảnh đã được cập nhật thành công ')}
//     ></Toolbar>
//   );
// }
// function Toolbar({onPlayMovie, onUploadImage}){
//   console.log("Rendering Toolbar component");

//   return(
//     <div>
//       <Button onClick  = {onPlayMovie}>
//         play Movie
//       </Button>
//       <Button onClick = {onUploadImage}>
//         Upload Image 
//       </Button>
//     </div>
//   );
// }
// function Button({onClick,children}){
//   return(
//     <button onClick ={onClick}>
//       {children}
//     </button>
//   )
// }



// export default function Toolbar(){
//   return(
//     <div
//       className  = "Toolbar"
//       onClick  = {() =>{
//         alert ("You click  on the toolbar");
//       }}
//       onClickCapture = {() => {
//         alert("hheheheheheejhheheheh");
//       }}
//       >
//     <button onClick = {
//       (e) => {e.stopPropagation();
//       alert("playing ");
//       }}>   Play Movie
//       </button>  
//       <button onClick = {(e) => {
//         alert("uploadding");
//       }}> uploading
//       </button>
//     </div>
//   )
// }





// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex(index + 1);
//   }
//   console.log(useState(0))

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }



// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     if(index === sculptureList.length-1){
//       setIndex (0);
//       }else{
//         setIndex (index + 1);
//       }
//   }
//   function handelPrev(){
//     if(index === 0){
//       setIndex(sculpture.length - 1);
//     }else {
//       setIndex (index - 1);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <button onClick ={handelPrev}>
//       Previous
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }


// import {useState} from 'react';
// export default function Form() {
//   let [firstName, setFistName] = useState('');
//   let [lastName, setLastName] = useState('');

//   function handleFirstNameChange(e) {
//     setFistName(firstName = e.target.value)
//   }
//   console.c

//   function handleLastNameChange(e) {
//     setLastName(lastName = e.target.value)
//   }

//   function handleReset() {
//     setFistName(firstName = '')
//     setLastName (lastName = '')
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }




import { useState } from "react";

export default function Counter(){
  let[number, setNumber]  = useState(0);
  return( 
  <>
    <h1>{number}</h1>
    <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1 );
        setNumber(10101010101)

    }}>+ 3</button>
  </>
  )
}