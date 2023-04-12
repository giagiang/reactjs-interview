// import {useState}from  'react';
// export default function  MovingDot(){
//   let[position, setPosition] = useState({
//   x: 0,
//   y: 0 
// });
// return (
//   <div
//   onPointerMove ={e =>{
//     // setPosition({
//     //   x :  e.clientX,
//     //   y :  e.clientY
//     // });
//     const newClick = {};
//     newClick.x = e.clientX;
//     newClick.y = e.clientY;
//     setPosition(newClick);
//     console.log(position)
//   }}
//   style={{
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
//   </div>
// );
// }


import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

    function handelChange(e){
      setPerson({
        ...person, [e.target.name]: e.target.value
    });
    }

  return (
    <>
      <label>
        First name:
        <input
                  name="firstName"

          value={person.firstName}
          onChange={handelChange}
        />
      </label>
      <label>
        Last name:
        <input
        name="lastName"
          value={person.lastName}
          onChange={handelChange}
        />
      </label>
      <label>
        Email:
        <input
        name="email"
          value={person.email}
          onChange={handelChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
