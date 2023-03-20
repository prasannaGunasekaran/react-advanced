import React,{useState} from 'react'
import { useEffect } from 'react';

//useEffect-higher order function
//useEffect-repetitive task
//useEffect replace a function 
//useEffect have 2 parameter  2nd parameter(dependency array)

const UseEffectBasics = () => {
  const[value,setValue]=useState(0);
  const[age,setAge]=useState(23);


  useEffect(()=>{
    document.title=`value-${value}`
    console.log('value updated')
  },[value])

  useEffect(()=>{
    console.log('age updated')
  },[age])


  // function updateTitle(){
  //   document.title=`value-${value}`
  // }
  return <main className='container'>
    <h2>{value}</h2>
    <h2>{age}</h2>
    <div>
      <button type='button' className='btn'
      onClick={()=> setValue(value+1)}>Increase value</button>

      <button type='button' className='btn'
      onClick={()=> setAge(age+1)}>Increase Age</button>

    </div>

  </main>
}

export default UseEffectBasics


//hooks cannot be used outside functional component