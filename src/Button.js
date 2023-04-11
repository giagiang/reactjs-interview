// export default function List(){
//   // let chemist= people.filter(person => 
//   //   person.profession === 'chemist'
//   //   );
//     let listItems = people.map (person  => 
//      <li>
//       <img
//       src={getImageUrl(person)}
//       alt= {person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         know for {person.accomplishment}
//       </p>
//      </li> 
//       );
//     return <ul>{listItems}</ul>;
// }
// import { people } from './data.js';
// import { getImageUrl } from './utils.js';
// export default function List() {
//   let chemist = people.filter(person =>
//     person.profession === 'chemist'
//     );
//   let everyoneElse = people.filter(person =>
//     person.profession !== 'chemist'
//     );
//   return(
//     <article>
//       <h1>Scientists </h1>
//       <h2>Chemists</h2>
//       <ul>
//         {chemist.map(person =>
//           <li key={person.id}>
//            <img
//            src={getImageUrl(person)}
//            alt={person.name}
//           />
//           <p>
//             <b>{person.name}:</b>
//             {' ' + person.profession + ' '}
//             known for {person.accomplishment}
//           </p>
//     </li>
//    )}
// </ul>
//       <h2>Everyone Else</h2>
//       <ul>
//         {everyoneElse.map(person => 
//       <li key={person.id} >
//       <img
//         src = {getImageUrl(person)}
//         alt = {person.name}
//         />
//         <p>
//           <b>{person.name}:</b>
//           {' ' + person.profession + ' '}
//           know for {person.accomplishment}
//         </p>
//       </li>
//       )}
//       </ul>
//    </article>
//   );
// }
// import {recipes} from './data.js';
// export default function RecipeList(){
//   return(
//     <div>
//       <h1> Recipes</h1>
//       {recipes.map(recipe =>
//         <Recipe 
//         key  = {recipe.id}
//         id = {recipe.id}
//         name  = {recipe.name}
//         ingredients= {recipe.ingredients}
//         />
//       )}
//     </div>
//   );
// }
// function Recipe({id,name,ingredients}){
//   return(
//     <div key = {id}>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map(ingredient => 
//         <li key = {ingredient}>
//         {ingredient}
//         </li>
//         )}
//       </ul>
//     </div>
//   )
// }
// function Cup({guest}){
//   return <h2> tea cup for guest #{guest}</h2>;
// }
// export default function TeaSet(){
//   return(
//     <>
//       <Cup guest = {1}/>
//       <Cup guest = {2}/>
//       <Cup guest = {3}/>
//     </>
//   )
// }
// function Cup({guest}){
//   return <h2>tea cup for guest # {guest}</h2>;
// }
// export default function TeaGathering(){
//   let cups = [];
//   for(let i = 1; i <=12; i++){
//     cups.push(<Cup key = {i} guest = {i}/>);
//   }
//   return cups;
// }
// function Recipe({drinks}){
//   return(
//     <ol>
//       <li>ehheheheh {drinks} hêhheheh</li>
//       <li>long time no see {0.5 * drinks}  </li>
//       <li>ú òa {2* drinks}</li>
//       <li>loading for my {6 * drinks}</li>
//     </ol>
//   )
// }
// export default function App(){
//   return(
//     <section>
//       <h1>
//         Cristiano Ronaldo
//       </h1>
//       <h2>
//         fomular one
//       </h2>
//       <Recipe drinks={2} />
//       <h2>
//         fomular two
//       </h2>
//       <Recipe drinks ={3}/>
//     </section>
//   )
// }
// import {useState} from 'react';
// import { sculptureList } from './data';
// export default function Gallery (){
//   let [index, setIndex ] = useState(0);
//   let [showMore, setShowMore ] = useState(false);
//   function handleNextClick(){
//     setIndex(index + 1 );
//   }
//   function handleMoreClick () {
//     setShowMore (!showMore );  
//   }
//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
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
// export default function Button(){
//   function handelClick(){
//     alert("siuuuuuuuuuuuuuuuuuuuuu");
//   }
//   return (
//     <button onClick = {handelClick}>
//           nhấn đi 
//     </button>
//   )
// }
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
function PlayButton({ movieName }) {
  function handelPlayClick() {
    alert(`playing ${movieName}! `);
  }
  return (
    <Button onClick={handelPlayClick}>
      play "{movieName}"
    </Button>
  );
}
function UploadButton() {
  return (
    <Button onClick={() => alert('uploading !')}>
      uploading image
    </Button>
  );
}
export default function remote() {
  return (
    <div>
      <PlayButton movieName="hihihihihi" />
      <UploadButton />
    </div>
  );
}
