// // import { useEffect, useState, useRef } from "react";
// // function VideoPlayer({ src, isPlaying }) {
// //   const ref = useRef(null);
// //   useEffect(() => {
// //     if (isPlaying) {
// //       ref.current.play();
// //     } else {
// //       ref.current.pause();
// //     }
// //   },[isPlaying, ref]);
// //   console.log(isPlaying);

// //   return <video ref={ref} src={src} loop playsInline />;
// // }

// // export default function App() {
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   return (
// //     <>
// //       <button onClick={() => setIsPlaying(!isPlaying)}>
// //         {isPlaying ? "pause" : "Play"}
// //       </button>
// //       <VideoPlayer
// //         isPlaying={isPlaying}
// //         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
// //       />
// //     </>
// //   );
// // }
// import{useEffect,useState} from 'react'

// function Playground(){
//   const[text, setText] = useState('a');
//   useEffect (()=>{
//     function onTimeout(){
//       console.log('⏰ ' + text);
//     }
//     console.log('🔵 Schedule "' + text + '" log');
//     const timeoutId = setTimeout(onTimeout,3000) ;
//     return () => {
//       console.log ('🟡 Cancel "' + text + '" log');
//       clearTimeout(timeoutId);
//     };
//   },[text]);
//   return(
//     <>
//       <label>
//         what to log: {''}
//         <input   value={text}
//         onChange={e => setText(e.target.value)}
//         />
//       </label>
//       <h1>{text}</h1>
//     </>
//   );
// }
// export default function App()  {
//   const [show, setShow ] = useState(false) ;
//   return(
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show? 'Unmount' : 'mount'} the component
//       </button>
//       {show && <hr />}
//       {show && <Playground />}
//     </>
//   )
// }







// import { useRef, useState } from "react";

// function App() {
//   const [count, setCount] = useState(60);
//   const ref = useRef(99);
//   console.log(ref.current);
//   let timerId;
//   const handleStart = () => {
//     timerId = setInterval(() => {
//       ref.current  = Math.random
//       setCount((prevCount) => prevCount - 1);
//     }, 1000);
//     console.log("Start ->", timerId);
//   };
//   const handleStop = () => {
//     clearInterval(timerId);
//     console.log("Stop ->", timerId);
//   };
//   return (
//     <div style={{ padding: 10 }}>
//       <h1>{count}</h1>
//       <button onClick={handleStart}>Start </button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// }
// export default App;

import {useState, createContext,useContext} from "react";

const UserContext = createContext();
function Component1(){
  const [user, setUser ] = useState("he lo  xin chào ");

  return (
    <UserContext.Provider value = {user}>
    <h1>{`Hello ${user}!`}</h1>
    <Component2/>
    </UserContext.Provider>
  );
}
function Component2(){
  return (
    <>
      <h1>
        component 2
      </h1>
      <Component3/>
    </>
  )

}

function Component3(){
  return (
    <>
      <h1>Component3</h1>
      <Component4/>
    </>
  )
}
function Component4 () { 
  return (
    <>
      <h1>Component4</h1> 
      <Component5/>
    </>
  )
}

function Component5(){
  const user = useContext(UserContext)
  return (
    <>
      <h1>component 5 </h1>
      <h2> { `hello ${user} again! `}</h2>
    </>

  )
}

export default Component1


