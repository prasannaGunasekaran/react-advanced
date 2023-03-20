import React from 'react'

const UseStateError = () => {
  let userName='Rajesh';
  
  const handleClicker=function(){
    console.log(userName);
    userName='Rajeswaran'
    console.log(userName);
  }
  return (
    <div className='container'>
      <h1>{userName}</h1>
      <button
      type='button'
      className='btn'
      onClick={handleClicker}>
        update
      </button>
    </div>
  )
}

export default UseStateError;


//add event in react


//react render cycle -react component cycle
//1)when component initialized react will render once(mounting)

//2)in order to re-render the components you need to change the state of the component

//refresh
//useState
//useState - re-render a component when a variable associated updates