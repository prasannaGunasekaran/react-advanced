import React, { useState,useContext } from 'react'
import {data} from '../../data';


const personContext=React.createContext()//consumer=going to take the content ,provider=giving the content
console.log(personContext)

const UseContext = () => {
  const [people,setPeople]=useState(data);


  const removePerson=(id)=>{
    const leftPeople=people.filter((person)=> person.id !==id);
    setPeople(leftPeople)
  }


  return (
    <personContext.Provider value={{removePerson,people}}>
      <section>
        <h3>context Api</h3>
        <List/>
      </section>
    </personContext.Provider>
  )
}

export default UseContext;


const List=()=>{
    const {people}=useContext(personContext)
  return(
    <div>
      {people.map((person)=>{
        return(
          <SinglePerson 
          key={person.id}
          {...person}/>
        )
      })}
    </div>
  )
}


const SinglePerson=({id,name})=>{
  return(
    <div>
      <h4>{name}</h4>
      <Button id={id}/>
    </div>
  )
}

const Button=({id})=>{
    const {removePerson}=useContext(personContext);
    return(
        <button type='button' 
        onClick={()=> removePerson(id)}>
          Remove Person
        </button>
  
    )
}