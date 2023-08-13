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

// import { useState, createContext, useContext } from "react";

// const UserContext = createContext();
// function Component1() {
//   const [user, setUser] = useState("he lo  xin chào ");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }
// console.log(UserContext.Provider);

// function Component2() {
//   return (
//     <>
//       <h1>component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   return (
//     <>
//       <h1>Component3</h1>
//       <Component4 />
//     </>
//   );
// }
// function Component4() {
//   return (
//     <>
//       <h1>Component4</h1>
//       <Component5 />
//     </>
//   );
// }

// function Component5() {
//   const user = useContext(UserContext);
//   return (
//     <>
//       <h1>component 5 </h1>
//       <h2> {`hello ${user} again! `}</h2>
//     </>
//   );
// }

// export default Component1;

// import {useState, useEffect, useRef} from  'react' ;

// function App() {
//   const  [inputValue, setInputValue] = useState ("") ;
//   const count = useRef(0)
//   useEffect(()=> {
//     count.current  = count.current + 1 ;
//     console.log(count.current)

//   });
//   return (
//     <>
//      <input
//       type  = "text"
//       value  = {inputValue}
//       onChange = {(e) => setInputValue(e.target.value)}
//      />
//      <h1> render Count :  {count.current  }</h1>
//     </>
//   )
// }
// export default App\\

// import { useState, useEffect } from 'react';
// import { createConnection, sendMessage } from "./chat.js";

// const serverUrl = "https://localhost:1234";

// function ChatRoom({ roomId }) {
//   const [message, setMessage] = useState('');
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);
//   function handleSendClick() {
//     sendMessage(message);
//   }
//   return (
//     <>
//       <h1> Welcome to the {roomId} room! </h1>
//       <input value={message} onChange={e => setMessage(e.target.value)} />
//       <button onClick={handleSendClick}>Send</button>
//     </>
//   );
// }
// export default function App() {
//   const [roomId, setRoomId] = useState('general');
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <label>
//         Choose the chat room:{' '}
//         <select value={roomId} onChange={e => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="travel"> travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Close chat' : 'Open chat'}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   );
// }

// import {useState } from 'react'
// import Content from  './Content'

// function App(){
//   const[show,setShow] = useState(false)
//   return (
//     <div style=  {{padding:20 }}>
//        <button onClick= {() => setShow(!show )}>Toggle</button>
//        {show && <Content />}
//     </div>
//   )
// }
// export default App

// import { useRef, useEffect } from "react";

// const App = () => {
//   const ref = useRef(null);
//   useEffect (() => {
//     const handleClick = event =>{
//       console.log('button clicked')
//     };
//     const element = ref.current;
//     element.addEventListener('click', handleClick);
//     return () =>{
//       element.addEventListener('click', handleClick);
//     }
//   },[]);
//   return(
//     <div>
//       <button ref ={ref}>click</button>
//     </div>
//   );
// };
// export default App;

// import { useRef, useState} from 'react' ;

// export default function StopWatch(){
//   const[startTime, setStartTime ] = useState(null);
//   const[now,setNow] = useState(null);
//   const intervalRef = useRef(null);
//   function handleStart(){
//     setStartTime(Date.now());
//     setNow(Date.now());

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(()=>{
//       setNow(Date.now());
//     },10)
//   }
//   function handleStop(){
//     clearInterval(intervalRef.current);
//   }

//   let secondPassed = 0;
//   if(startTime != null && now != null) {
//     secondPassed = (now - startTime ) / 1000;
//   }
//   return (
//     <>
//       <h1> time passed: {secondPassed.toFixed(2)}</h1>
//       <button onClick={handleStart}>Start</button>
//       <br/>
//       <button onClick={handleStop}>Stop</button>

//     </>
//   )
// }
import { useContext } from "react";
import {ThemeContext} from './ThemeContext'
import Content from "./Content";
import "./App.css";

function App() {
  const context = useContext(ThemeContext)
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}> Toggle theme</button>
      <Content />
    </div>
  );
}
export default App;
 