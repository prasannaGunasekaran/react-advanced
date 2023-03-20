import React,{useState} from 'react'

const ShortCircuiting = () => {
    const [user]=useState('');
    const [isError,setIsError]=useState(false);
  return (
   <div>
   <h1>{user || 'Rajesh'}</h1>
   <button type='button'
   onClick={()=> setIsError(!isError) }>
    Toggle Error
   </button>

   {isError && <h1>Error...</h1>}
   {isError ? <h1>An Error occures</h1>:<h1>Hello</h1>}

   </div>
  )
}

export default ShortCircuiting