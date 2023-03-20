import React,{useState} from 'react'

const MultipleInputs = () => {
    const[person,setPerson]=useState({secondName:'',email: '',age: ''});
    const[people,setPeople]=useState([]);


    const SubmitHandler=(e)=>{
        e.preventDefault();
        
    if(person.secondName && person.email && person.age){
        const newPerson={...person,id:new Date().valueOf() };

        setPeople([...people,newPerson]);

        setPerson({
            secondName:'',
            email:'',
            age:''
        });

    }
    else{
       alert(`all are mandatory`) 
    }
  };

    const ChangeHandler =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setPerson({...person,[name]:value})
    };

    
  return (
    <article>
    <form onSubmit={SubmitHandler}>

<div>
        <label htmlFor='secondName'>secondName</label>
        <input type="text" id="secondName" name='secondName'
        value={person.secondName}
        onChange={ChangeHandler}/>
      </div>

      <div>
        <label htmlFor='email' >email</label>
        <input type="email" id="email" name='email'
        value={person.email}
        onChange={ChangeHandler}/>
      </div>

      <div>
        <label htmlFor='age'>age</label>
        <input type="number" id="age" name='age'
        value={person.age}
        onChange={ChangeHandler} />
      </div>

      <button type='submit'> Add user</button>
    </form>

    {people.map((user,index)=>{
      const{secondName,email,age}=user;
      return(
        <div key={index}>
          <h4>{secondName}</h4> 
          <p>{email}</p>
          <p>{age}</p>
        </div>
      )
    })}
  </article>

  )
}

export default MultipleInputs