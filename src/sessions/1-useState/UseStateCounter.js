import React,{useState} from 'react'

const UseStateCounter = () => {
    const[value,setValue]=useState(0)
  return <div className='container'>
    <h3>React Container</h3>
    <h1>{value}</h1>
    <div className='btn-container'>
        <button type='button' className='btn' onClick={()=> setValue(value+1)}>Increase</button>
        <button type='button' className='btn' onClick={()=> setValue(0)}>reset</button>
        <button type='button' className='btn' onClick={()=> setValue(value < 1? 0:value-1)}>Decrease</button>

    </div>

</div>
}

export default UseStateCounter