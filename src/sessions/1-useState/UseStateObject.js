import React,{useState}from 'react'

const UseStateObject = () => {
    const [user,setUser]=useState({
        fullName:'prasanna',
        profession:'reactDeveloper',
        city:'chennai',
    });
// we want update only city but we want write fullName,profession then only update will properly work
//if we give only city and update means only update will comes fullName,profession so we use spread operator 
//spread operator in update (one value in the object without modifying other)
    const clickHandler=()=>{
        setUser({ ...user,city:'coimbatore',age:23})
    }
  return<div className='container'>
  <h3>{user.fullName}</h3>
  <h3>{user.profession}</h3>
  <h3>{user.city}</h3>
  <h3>{user.age}</h3>
  <button type='button' className='btn' onClick={clickHandler}>
    update user
  </button>
  </div>
}

export default UseStateObject