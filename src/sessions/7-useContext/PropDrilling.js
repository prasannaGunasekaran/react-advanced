import React, {useState } from 'react'
import {data} from '../../data';

const PropDrilling = () => {
  const [people,setPeople]=useState(data);

  const removePerson=(id)=>{
    const leftPeople=people.filter((person)=> person.id !==id);
    setPeople(leftPeople)
  }


  return (
    <div>
      <section>
        <h3>Prop Drilling</h3>
        <List people={people}
        removePerson={removePerson}/>
      </section>
    </div>
  )
}

export default PropDrilling;
const List=({people,removePerson})=>{
  return(
    <div>
      {people.map((person)=>{
        return(
          <SinglePerson 
          key={person.id}
          {...person}
          //prop
          removePerson={removePerson}/>
        )
      })}
    </div>
  )
}

const SinglePerson=({id,name,removePerson})=>{
  return(
    <div>
      <h4>{name}</h4>
      <button type='button' 
      onClick={()=> removePerson(id)}>
        Remove Person
      </button>
    </div>
  )
}