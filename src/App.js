// Choosing the state structure 

import  {useState } from 'react'; 
export default function From(){
    let [firstName , setFirstName] =  useState ('');
    let [lastName , setLastName] =  useState ('');
    // let [fullName , setFullName] =  useState ('');
    let fullName = firstName + '  ' + lastName;
    

    function handelFirstNameChange(i){
        setFirstName(i.target.value);
        // setFullName(i.target.value+ '  ' + lastName);
    }
    function handelLastNameChange(i){
        setLastName(i.target.value);
        // setFullName(firstName + '  ' + i.target.value);
    }
    return(
        <>
            <h2>let's check you in </h2>
            <label>
                First Name : {' '}
                <input 
                    value={firstName}
                    onChange={handelFirstNameChange}
                />
            </label>
            <br/>
            <label>
                Last Name:{' '}
                <input 
                 value={lastName}
                 onChange={handelLastNameChange}   
                />
            </label>
            <p>
                your input successs nha : <b>{fullName}</b>
            </p>
        </>
    )
}

// Sharing state between components 




