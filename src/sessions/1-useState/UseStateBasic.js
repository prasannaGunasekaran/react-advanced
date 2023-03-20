import React,{useState} from 'react';

const UseStateBasic = () => {
  let[user,setUser]=useState('Prasanna');
  const[age,setAge]=useState(23);

const updateName=()=>{
  if(user==='Prasanna'){
    setUser('gunasekaran')
  }
  else{
    setUser('Prasanna')
  }
};
const updateAge=()=>{
  if(age ===23){
    setAge(53);
  }
  else{
    setAge(23);
  }
} 
  return (
    <div>
      <h1>{user}</h1>
      <p>{age}</p>
      <div>
        <button type="button" onClick={updateName}>update name</button>
        <button type="button" onClick={updateAge}>update age</button>
      </div>
    </div>

  )
}
export default UseStateBasic


//we need to import useState function from react

//useState -named export

//hooks can only be used inside a component


//useState -1 -initial ,2-dispatch function used to update the variable


//Events in React 
// event name start with on 
//event handler function(named function,anonyms function)
//function with argument