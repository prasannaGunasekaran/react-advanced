 import React, { useState } from 'react';
 import {data} from '../../data'
 
 const UseStateArray = () => {
    const[people,setPeople]=useState(data);

    const removeUser=(id)=>{
    const updatedUsers=people.filter((person)=> person.id !==id);   
    setPeople(updatedUsers)
    }
   return (
     <div className='container'>
        {people.map((person)=>{
            return(
                <div className='item'
                key={person.id}>

                    <h2>{person.name}</h2>

                    <button type="button" className='btn'
                    onClick={()=> removeUser(person.id)}>
                        btn
                    </button>
                    
                    </div>
            )
             
        })}
     </div>
   )
 }
 
 export default UseStateArray