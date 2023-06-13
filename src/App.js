// import {useState} from 'react';
  
// export default function Accordion(){
// const[activeIndex,setActiveIndex] = useState(0)
//     return (
//       <>
//         <h2>Almaty, Kazakhtan</h2>
//         <Panel  title = 'About'
//         isActive = {activeIndex === 0 }
//         onShow = {() => setActiveIndex(0)}>
//         With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//         </Panel>
//         <Panel  title = "Etymology"
//          isActive = {activeIndex === 1}
//          onShow = {() => setActiveIndex(1)}>
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//         </Panel>
//       </>
//    );
// }
// function Panel({title, children, isActive, onShow}) {

//     return(
//       <section className = "panel">
//         <h3>{title}</h3>
//         {isActive ? (
//           <p>{children}</p>
//         ) : (
//           <button onClick = {onShow}> Show </button>
//         )}
//       </section>
//     );
//   }
  




// import {useState} from 'react';
// export default function  SyncedInputs(){
//     const [ text, setText] = useState('');

//     function handelChange (e){
//       setText(e.target.value );
//     }

//   return (
//     <>
//     <input label  = "First input "
//       value = {text}
//       onChange={handelChange}
//     />
//     <input label  = "second input "
//           value = {text}
//       onChange={handelChange}
//     />
//     </>
//   );
// }
//   function  Input ({label, value, onChange}){


//     return (
//       <label>
//       {label}
//       {' '}
//       <input 
//         value = {value}
//         onChange={onChange}
//       />

//       </label>
//     )
//   }





import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const result = filterItems(foods, query) ;
  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <>
      <SearchBar 
        query  = {query}
        onChange = {handleChange}
      />
      <hr />
      <List items={result} />
    </>
  );
}

function SearchBar({query, onChange}) {

  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}