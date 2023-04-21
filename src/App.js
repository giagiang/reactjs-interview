// import { useState } from 'react';

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setArtists([
//           ...artists,
//           { id: nextId ++, name: name }
//         ]);
//         console.log(artists)
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


// import {useState} from 'react'; 
// let initialArtists  = [
//     {
//         id: 0,  name: 'Marta  Colvin Anfrade'
//     },
//     {
//         id: 1,  name: 'Lamidi Olonade Fakeye'
//     },
//     {
//         id: 2,  name: 'Louise Nevelson'
//     }

// ]
// export default function List(){
//     const[ artists, setArtists] = useState(initialArtists)

// return ( 
//     <>
//         <h1>Inspiring  sculptors:</h1>
//         <ul>
//             {artists.map(artist => (
//             <li key = {artist.id}> {artist.name}{' '}  
//             <button onClick={()=>{
//                 setArtists(
//                     artists.filter(a => a.id !== artist.id));
//             }}>delete </button></li>
//             ))}
//         </ul>
//     </>
// )
// };


// import { useState } from 'react';

// let initialShapes = [
//   { id: 0, type: 'circle', x: 50, y: 100 },
//   { id: 1, type: 'square', x: 150, y: 100 },
//   { id: 2, type: 'circle', x: 250, y: 100 },
// ];

// export default function ShapeEditor() {
//   const [shapes, setShapes] = useState(
//     initialShapes
//   );

//   function handleClick() {
//     const nextShapes = shapes.map(shape => {
//       if (shape.type === 'square') {
//         // No change
//         return shape;
//       } else {
//         // Return a new circle 50px below
//         return {
//           ...shape,
//           y: shape.y + 50,
//         };
//       }
//     });
//     // Re-render with the new array
//     setShapes(nextShapes);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Move circles down!
//       </button>
//       {shapes.map(shape => (
//         <div
//           key={shape.id}
//           style={{
//           background: 'purple',
//           position: 'absolute',
//           left: shape.x,
//           top: shape.y,
//           borderRadius:
//             shape.type === 'circle'
//               ? '50%' : '',
//           width: 20,
//           height: 20,
//         }} />
//       ))}
//     </>
//   );
// }


// Replacing items in an array 
// import  {useState } from 'react' ; 
// let  initialCountter = [0,0,0];
// export default function CounterList(){
//     const [counters, setCounters] = useState(initialCountter)

// function handelIncrementClick (index ){
//     const nextCounters = counters.map((c,i )=> {
//         if(i === index ){
//             return c+ 1 }
//         else{
//             return c ;
//         }
//     });
//     setCounters(nextCounters)
// }
// return(
//     <ul>
//         {counters.map((counter,i )=>(
//             <li key = {i}>
//                 {counter}
//                 <button onClick={()=>{
//                     handelIncrementClick(i)
//                 }}>+1</button>
//             </li>
//         ))}
//     </ul>
//  )
// };


// Adding to an array 

// import {useState} from 'react';
// let nextId = 0 ; 

// export default function List(){
//     const  [name , setName ] = useState('');
//     const [artists , setArtists] = useState([]);
    

//     return(
//          <>
//             <h1>Inspiring sculptors:</h1>
//             <input  value={name}
//             onChange  = {e => setName(e.target.value )}/>
        
         
//          <button onClick={() => {
//         setArtists([
//           ...artists,
//           { id: nextId++, name: name }
//         ]);
//       }}>Add</button>
    
//     <ul>
//         {artists.map(artists => (
//             <li key={artists.id}>{artists.name }</li>
//         ))}
//     </ul>
//     </>
//  );
// }

// Removing from an array 


// import {useState} from 'react'; 
// let initialArtists = [
//     { id: 0, name: 'Marta Colvin Andrade' },
//     { id: 1, name: 'Lamidi Olonade Fakeye'},
//     { id: 2, name: 'Louise Nevelson'},
//   ];

//   export default function List(){
//     const[artists,setArtists] = useState(
//         initialArtists
//     )
//     return(
//         <>
//             <h1> REMOVE Inspiring sculptors</h1>
//             <ul>
//                 {artists.map(artist=>
//                 (<li key= {artist.id}>
//                 {artist.name}<br/>
//                 <button onClick={()=>{
//                     setArtists(
//                         artists.filter(a=>a.id !== artist.id)
//                     )
//                 }}>Delete</button>
//                 </li>))}
//             </ul>
//         </>
//     )
//   }



// transfromming an array  


// import {useState } from 'react'; 

//  let initialShapes = [
//     { id: 0, type: 'circle', x: 50, y: 100 },
//     { id: 1, type: 'square', x: 150, y: 100 },
//     { id: 2, type: 'circle', x: 250, y: 100 },
//   ];
// export default function ShapeEditor(){
//     const [shapes, setShepes] =  useState(
//         initialShapes
//     )
//     function handelClick  (){
//         const nextShapes = shapes.map (shape => {
//             if  (shape.type ==='square'){
//                 return shape;
//             }else {
//                 return  {
//                     ...shape,
//                     x : shape.x +50 
//                 }
//             }
//         });
//         setShepes(nextShapes);
//     }
//     return (
//         <>
//         <button onClick  =  {handelClick}>
//         move circles down! 
//         </button>
//         {shapes.map (shape =>(
//             <div
//           key={shape.id}
//           style={{
//           background: 'purple',
//           position: 'absolute',
//           left: shape.x,
//           top: shape.y,
//           borderRadius:
//             shape.type === 'circle'
//               ? '50%' : '',
//           width: 20,
//           height: 20,
//         }} />
//         ))}
//         </>
//     )
// }


// Replacing items in an array 


// import {useState } from 'react';

// let initialCounters = [
//     0, 0, 0
//   ];

//   export default function CounterList(){
//     const [counters, setCounters ] = useState(initialCounters)
  
//   function handleIncrementClick (index){
//     const nextCouters = counters.map ((c,i)=> {
//         if(i === index){ 
//             return c + 1 ; 
//         }else{
//             return c ;
//         }
//     });
//     setCounters(nextCouters);
//   }
//   return(
//     <ul>
//         {counters.map((counter, i)=>(
//             <li key = {i}>
//                 {counter}
//                 <button onClick = {() => {
//                     handleIncrementClick(i);
//                 }}>+1</button>
//             </li>
//         ))}
//     </ul>
//   );
// }


// Inserting into an array 
// import { useState } from 'react';

// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies' },
//   { id: 1, title: 'Lunar Landscape' },
//   { id: 2, title: 'Terracotta Army' },
// ];

// export default function List() {
//   const [list, setList] = useState(initialList);

//   function handleClick() {
//     const nextList = [...list];
//     nextList.reverse();
//     setList(nextList);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Reverse
//       </button>
//       <ul>
//           {list.map(artwork => {
//             console.log(artwork);
//             return 
//             <li key={artwork.id}>{artwork.title}</li>;
//           })}
//       </ul>      
//     </>
//   );
// }



// Making other changes to an array 


// import {useState} from 'react';
// let nextId  = 3 ; 
// const initialList = [
//     { id: 0, title: 'Big Bellies' },
//     { id: 1, title: 'Lunar Landscape' },
//     { id: 2, title: 'Terracotta Army' },
//   ];
// export default function List (){
//     const[list, setList] = useState(initialList);
//     function handelClick(){
//         const nextList = [...list];
//         nextList.reverse();
//         setList(nextList);
//     }
//     return ( 
//         <>
//             <button onClick={handelClick}>
//                 reverse
//             </button>
//             <ul>
//                 {list.map(artwork=> (
//                     <li key = {artwork.id}> {artwork.title}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }


// Updating objects inside arrays 

// import { useState } from 'react';

// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

//   export default function BucketList() {
//   const [myList, setMyList] = useState(initialList);
//   const [yourList, setYourList] = useState(
//     initialList
//   );

//   function handleToggleMyList(artworkId, nextSeen) {
//     setMyList(myList.map(artwork => {
//         if (artwork.id === artworkId) {
//           // Create a *new* object with changes
//           return { ...artwork, seen: nextSeen };
//         } else {
//           // No changes
//           return artwork;
//         }
//       }));
//   }

//   function handleToggleYourList(artworkId, nextSeen) {
//         setYourList(yourList.map(artwork => {
//             if (artwork.id === artworkId){
//                 return{...artwork,seen:nextSeen};
//             }else{
//                 return artwork;
//             }
//         } ))
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList
//         artworks={myList}
//         onToggle={handleToggleMyList} />
//       <h2>Your list of art to see:</h2>
//       <ItemList
//         artworks={yourList}
//         onToggle={handleToggleYourList} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={e => {
//                 onToggle(
//                   artwork.id,
//                   e.target.checked
//                 );
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }

// write concise update  logic with immer 


import {useState} from 'react'; 
import {useImmer} from 'use-immer' ;

let nextId = 3 ;
const mang = [{ id: 0, title: 'Big Bellies', seen: true },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: false }, 
];

export default function Listmang(){
    const [myList, updateMyList] = useImmer(
        mang
    );
    const [yourList , updateYourList ] = useImmer (
        mang
    );
    function handelClickMylist(id,nextSeen){
        updateMyList (draft => { 
            const astWork =  draft.find(a=> a.id === id);
            astWork.seen = nextSeen;
        });
    }
    function handelClickYourList(astWorkId, nextSeen){
        updateYourList(draft => {
            const astWork = draft.find(a => a.id === astWorkId);
            astWork.seen = nextSeen;
        })
    }
    return (
        <>
            <h1>đây là đầu trang</h1>
            <h2> đây là tiêu đề thứ hai </h2>
            <ItemList 
            astWork  = {myList}
            onTagger= {handelClickMylist}
            />
            <h2>yourlos</h2>
            <ItemList 
                astWork = {yourList}
                onTagger = {handelClickYourList}
            />
        </>
    )
};
function ItemList ({astWork, onTagger}){
    return (
        <ul>
            {astWork.map(astWork => (
                <li key  = {astWork.id}>
                    <label>
                    <input
                      type="checkbox"
                         checked={astWork.seen}
                          onChange={e => {
                            onTagger(
                              astWork.id,
                         e.target.checked
                );
              }}
            />
                        {astWork.title}
                    </label>
                </li>
            ))}
        </ul>
    )
}
