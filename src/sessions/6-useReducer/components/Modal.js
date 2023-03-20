import React,{useEffect} from 'react'

const Modal = ({modalContent,closeModal}) => {

  useEffect(()=>{
    const timeOut=setTimeout(()=>{
        closeModal();
    },2000)
    return()=> clearTimeout(timeOut)
  })  
  return (
    <div>
        <p>{modalContent}</p>
    </div>
  )
}

export default Modal