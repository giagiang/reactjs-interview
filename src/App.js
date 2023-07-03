import{useRef, useState} from "react";
function VideoPlayer({src,isPlaying }){
  const ref = useRef(null);

  if(isPlaying){
    ref.current.play();
  }else{
    ref.current.pause(); 
  }
  return<video ref={ref} src={src} loop playsInline/>
}

export default function App(){
  const [isPlaying,setIsPlaying]=useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={ isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
