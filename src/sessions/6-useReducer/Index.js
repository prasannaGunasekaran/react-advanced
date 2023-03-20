import React,{useReducer, useState}from 'react'
import {data} from '../../data';
import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal';


const initialState={
people:data,
isModalOpen:false,
modalContent:'',
}

const reducer=(state,action)=>{
if(action.type==='ADD_ITEM'){
    const newPeople=[...state.people,action.payload];
    return{
        ...state,
        people:newPeople,
        isModalOpen:true,
        modalContent:'person Added'
}

}else if(action.type==='REMOVE_PERSON'){
    return{
        ...state,
        people:action.payload,
        isModalOpen:true,
        modalContent:'person removed'
    }
}else if(action.type==='CLOSE_MODEL'){
    return{
        ...state,
        isModalOpen:'',
    }
}
}


const Index = () => {
    const[name,setName]=useState('');
    const[state,dispatch]=useReducer(reducer,initialState)


    const handleSubmit=(e)=>{
       e.preventDefault();

       if(name){
        const newUser={id:uuidv4(),name};
        dispatch({type:'ADD_ITEM',payload:newUser})
        setName('')
       }else{
        alert('all fields are mandatory')
       }
    };

    const removePerson=(id)=>{
        const remainingPeople=state.people.filter((person)=> person.id !==id);
        dispatch({type:'REMOVE_PERSON',payload:remainingPeople})
    }

    const closeModal=()=>{
        dispatch({type:'CLOSE_MODEL',})
    }

      return (
        <>
        {state.isModalOpen && (
            <Modal closeModal={closeModal}
            modalContent={state.modalContent}
            />
        )}
        {}
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <button type='submit'>add</button>
        </form>
        {state.people.map((person)=>{
            return(
                <div key={person.id}>
                    <h4>{person.name}</h4>
                    <button onClick={()=>removePerson(person.id)}>remove</button>
                </div>
            )
        })}
        </>
  )
}
export default Index





















//need to create two variables in useReducer

//initialState-function,reducer function