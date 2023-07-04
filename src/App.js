// import { useEffect, useState, useRef } from "react";
// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);
//   useEffect(() => {
//     if (isPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   },[isPlaying, ref]);
//   console.log(isPlaying);

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? "pause" : "Play"}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }
import{useEffect,useState} from 'react'


function Playground(){
  const[text, setText] = useState('a');
  useEffect (()=>{
    function onTimeout(){
      console.log('⏰ ' + text);
    }
    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout,3000) ; 
    return () => {
      console.log ('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  },[text]);
  return(
    <>
      <label>
        wwhat to log: {''}
        <input   value={text}
        onChange={e => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  );
}
export default function App()  { 
  const [show, setShow ] = useState(false) ; 
  return(
    <>
      <button onClick={() => setShow(!show)}>
        {show? 'Unmount' : 'mount'} the component
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  )
}
