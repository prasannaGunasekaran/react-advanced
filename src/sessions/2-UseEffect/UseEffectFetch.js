import React,{useState,useEffect} from 'react';

const url='https://api.github.com/users'
//to control infinate rerendering
const UseEffectFetch = () => { 

    const[users,setUsers]=useState([]);
  return (
    <main className='container'>
        <h2>Github users</h2>
    </main>
  )
}

export default UseEffectFetch