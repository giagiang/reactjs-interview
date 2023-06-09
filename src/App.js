


// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [text, setText] = useState('');
//   const [isSending, setIsSending] = useState(false);
//   const [isSent, setIsSent] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setIsSending(true);
//     await sendMessage(text);
//     setIsSending(false);
//     setIsSent(true);
//   }

//   if (isSent) {
//     return <h1>Thanks for feedback!</h1>
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>How was your stay at The Prancing Pony?</p>
//       <textarea
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <br />
//       <button
//         disabled={isSending}
//         type="submit"
//       >
//         Send
//       </button>
//       {isSending && <p>Sending...</p>}
//     </form>
//   );
// }

// // Pretend to send a message.
// function sendMessage(text) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });
// }




// import { useState } from 'react';

// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   )
// }




// import  {useState} from 'react'; 
// export default function FeedbackForm(){
//   const [text, setText] = useState('');
//   const [isSending,setIsSending] = useState(false);
//   const [isSent, setIsSent] = useState(false);

//   async function handleSubmit(e){
//     e.preventDefault();
//     setIsSending(false);
//     await sendMessage (text);
//     setIsSending(true);
//     setIsSent(false);
//   }
//   if (isSent) {
//     return <h1>Thanks for feedback!</h1>
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>How was your stay at The Prancing Pony?</p>
//       <textarea
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <br />
//       <button
//         disabled={isSending}
//         type="submit"
//       >
//         Send
//       </button>
//       {isSending && <p>Sending...</p>}
//     </form>
//   );
// }

// function sendMessage(text) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });
// }




// import {useState} from 'react';
// const initialItems = [
//   {title: 'pretzels', id:0},
//   {title: 'crisp seaweed', id: 1 },
//   {title: 'granola bar ', id : 2}, 
// ];
  
// export default function Menu() {
//   const [items, setItems] = useState(initialItems);
//   const [selectedItem, setSelectedItem] = useState(
//     items[0]
//   );
//   function handleItemChange(id, e){
//     setItems(items.map(item => { 
//       if(item.id === id){
//         return {  
//           ...item,  
//           title: e.target.value
//         };
//       }else{
//         return item;
//       }
//     }));
//   }
//   return (
//      <>
//       <h2>What's your travel snack?</h2> 
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             <input
//               value={item.title}
//               onChange={e => {
//                 handleItemChange(item.id, e)
//               }}
//             />
//             {' '}
//             <button onClick={() => {
//               setSelectedItem(item);
//             }}>Choose</button>
//           </li>
//         ))}
//       </ul>
//       <p>You picked {selectedItem.title}.</p>
//     </>
//   )
// }

// import {useState} from 'react';
// const initialItems  = [
//   {title: 'pretzels', id: 0},
//   {title: 'crispy seaweed', id: 1},
//   {title: 'granola bar', id: 2},
// ];
// export default function Menu(){
//   const [items, setItems] = useState(initialItems);
//   const [selectedId, setSelectedId] = useState(0)
//   const selectedItem = items.find(item => item.id ===selectedId);

//   function handelItemChange(id,e){
//     setItems(items.map(item=> {
//       if (item.id === id ){
//         return {
//           ...item, 
//           title: e.target.value,

//         };

//       }else{
//         return item;
//       }
//     }));
//   }
//     return (
//       <>
//       <h2> what's your travel snack</h2>
//       <ul>
//         {items.map((item, index)=> (
//           <li key={item.id}>
//             <input
//               value={item.title}
//               onChange={e => {
//                   handelItemChange(item.id,e)
//               }}
//             />
//             {' '}
//             <button onClick ={()=>{
//               setSelectedId (item.id);
//             }}>Choose</button>
//           </li>
//         ))}
//       </ul>
//       <p>you picked {selectedItem.title}.</p>
//     </>
//   )
// };
  


// import {useState} from 'react'; 
// import {initialTravelPlan} from './plances.js';

// function PlaceTree({ place }) {
//   const childPlaces = place.childPlaces;
//   console.log("childolace value: ", childPlaces );
//   // console.log("place value: ", place)
//   return (
//     <li>
//        {place.title}
//         {childPlaces.length > 0 && (
//          <ol>
//            {childPlaces.map(place => (
//              <PlaceTree key={place.id} place={place} />
//             ))}
//          </ol>
//        )}
//     </li>
//   );
// }
// export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);
//   const planets = plan.childPlaces;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//       {planets.map(place => (
//           <PlaceTree key={place.id} place={place} />
//         ))}
//       </ol>
//     </>
//   );
// }


// import {useState} from 'react' ; 
// import { initialTravelPlan } from './plances.js';

// function PlaceTree({id, placesById}){
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       {childIds.length > 0 && (
//         <ol>
//           {childIds.map (childId => (
//             <PlaceTree 
//               key = {childId}
//               id = {childId}
//               placesById={placesById}    
//             />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// }
// export default function TravelPlan(){
//   const [plan, setPlan] = useState(initialTravelPlan) ;
//   const root = plan[0];
//   const planetIds = root.childIds;
//   console.log("planets value :", planetIds)
//   return(
//     <>
//       <h2>
//         place to visit
//       </h2>
//       <ol>
//         {planetIds.map(id => (
//           <PlaceTree 
//             key= {id}
//             id= {id}
//             placesById={plan}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }


// import { useState } from 'react';
// import { initialTravelPlan } from './places.js';

// export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);

//   function handleComplete(parentId, childId) {
//     console.log("parentid value:", parentId);
//     const parent = plan[parentId];
//     // Create a new version of the parent place
//     // that doesn't include this child ID.
    
//     const nextParent = {
//       ...parent,
//       childIds: parent.childIds
//         .filter(id => id !== childId)
//     };
//     // Update the root state object...
//     // console.log("plan value:", plan);
//     // console.log("next parent value:", nextParent);
//     // const temoryPlan = {
//     //   ...plan,
//     //   [parentId]: nextParent
//     // };
//     // console.log("temporaryPlan value:",temoryPlan);
//     // setPlan(temoryPlan)
//     setPlan({
//       ...plan,
//       // ...so that it has the updated parent.
//       [parentId]: nextParent
//     });
//   }

//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map(id => (
//           <PlaceTree
//             key={id}
//             id={id}
//             parentId={0}
//             placesById={plan}
//             onComplete={handleComplete}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }

// function PlaceTree({ id, parentId, placesById, onComplete }) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       <button onClick={() => {
//         onComplete(parentId, id);
//       }}>
//         Complete
//       </button>
//       {childIds.length > 0 &&
//         <ol>
//           {childIds.map(childId => (
//             <PlaceTree
//               key={childId}
//               id={childId}
//               parentId={id}
//               placesById={placesById}
//               onComplete={onComplete}
//             />
//           ))}
//         </ol>
//       }
//     </li>
//   );
// }


// import { useImmer } from 'use-immer';
// import { initialTravelPlan } from './places.js';

// export default function TravelPlan() {
//   const [plan, updatePlan] = useImmer(initialTravelPlan);

//   function handleComplete(parentId, childId) {
//     updatePlan(draft => {
//       // Remove from the parent place's child IDs.  
//       const parent = draft[parentId];
//       parent.childIds = parent.childIds
//         .filter(id => id !== childId);
//         console.log("parent value", parentId);
//         console.log("childids value", childId)

//       // Forget this place and all its subtree.
//       deleteAllChildren(childId);
//       function deleteAllChildren(id) {
//         const place = draft[id];
//         place.childIds.forEach(deleteAllChildren);
//         delete draft[id];
//         // console.log("forech value:", place)
//       }
//     });
//   }

//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map(id => (
//           <PlaceTree
//             key={id}
//             id={id}
//             parentId={0}
//             placesById={plan}
//             onComplete={handleComplete}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }

// function PlaceTree({ id, parentId, placesById, onComplete }) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       <button onClick={() => {
//         onComplete(parentId, id);
//       }}>
//         Complete
//       </button>
//       {childIds.length > 0 &&
//         <ol>
//           {childIds.map(childId => (
//             <PlaceTree
//               key={childId}
//               id={childId}
//               parentId={id}
//               placesById={placesById}
//               onComplete={onComplete}
//             />
//           ))}
//         </ol>
//       }
//     </li>
//   );
// }





// challenges 3 
// import { useState } from 'react';
// import { initialLetters } from './data.js';
// import Letter from './Letter.js';

// export default function MailClient() {
//   const [letters, setLetters] = useState(initialLetters);
//   const [highlightedLetterId, setHighlightedLetterId] = useState(null);

//   function handleHover(letterId) {
//     setHighlightedLetterId(letterId);
//   }

//   function handleStar(starredId) {
//     setLetters(letters.map(letter => {
//       if (letter.id === starredId) {
//         return {
//           ...letter,
//           isStarred: !letter.isStarred
//         };
//       } else {
//         return letter;
//       }
//     }));
//   }

//   return (
//     <>
//       <h2>Inbox</h2>
//       <ul>
//         {letters.map((letter) => {
//          return(
//           <Letter
//             key={letter.id}
//             letter={letter}
//             isHighlighted={
//               letter.id === highlightedLetterId
//             }
//             onHover={handleHover}
//             onToggleStar={handleStar}
//           />
//           )
//         })}
//       </ul>
//     </>
//   );
// }
 

// challeges 4 
import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = 1;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
      // console.log(selectedIds);
    if (selectedIds.includes(toggledId)){
      setSelectedIds(selectedIds.filter(id => id !== toggledId))
    }else{
      setSelectedIds([...selectedIds, toggledId]);}
    console.log(toggledId);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
             selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}

