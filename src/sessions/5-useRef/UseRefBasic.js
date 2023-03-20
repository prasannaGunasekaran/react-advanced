import React,{useRef} from 'react'
//preserve the value
//does not trigger re -rendering
//triggering on DOM /node elements
const UseRefBasic = () => {
//1-create a useRef container
const refContainer=useRef(null);
  return (
    <>
    <form>
        <div>
            <label htmlFor='userName'>userName:</label>
            <input id='username' name='username' type='text' ref={refContainer} />
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
    )
}

export default UseRefBasic