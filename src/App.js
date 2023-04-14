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
    name : 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }

  });

    function handelNameChange(e){
      setPerson({
        ...person, name:e.target.name
    });
    }
    function handelChangeTitail(e){
      setPerson({
        ...person, artwork:{
          ...person.artwork,title:e.target.value
        }
      });
    }
    function handelChangeCity(e){
      setPerson({
        ...person, artwork:{
          ...person.artwork, city:e.target.value
        }
      });
    }
    function handelChangeImage(e){
      setPerson({
        ...person,artwork:{
          ...person.artwork, image:e.target.value
        }
      });
    }

  return (
    <>
      <label>
         name:
        <input
          value={person.name}
          onChange={handelNameChange}
        />
      </label>
      <label>
        title
        <input
          value={person.artwork.title}
          onChange={handelChangeTitail}
        />
      </label>
      <label>
        city
        <input
          value={person.artwork.city}
          onChange={handelChangeCity}
        />
      </label>
      <label>
        Image
        <input 
          value={person.artwork.value}
          onChange={handelChangeImage}
        />
      </label>
      <p>
      <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
        />
    </>
  );
}



updatePerson(draft => {
  draft.artwork.city = 'Lagos';
});

import { useImmer } from 'use-immer';

export default function Form() {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}
