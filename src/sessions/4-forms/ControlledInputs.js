import React,{useState} from 'react'
//js
//const inputEl=document.getElementById('username');
//const inputValue=inputEl.value;


//react
//value
//onChange
const ControlledInputs = () => {
  const[firstName,setFirstName]=useState('');
  const[email,setEmail]=useState('');
  const[users,setUsers]=useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();
    const newUser={firstName:firstName,email:email}
    //enhanced object literals
    //const newUser={firstName,email};

    setUsers([...users,newUser]);
    setFirstName('');
    setEmail('');
  };
  return (
    <article>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='firstName'>firstName</label>
          <input type="text" id="firstName" name='FirstName'
          value={firstName}
          onChange={(e)=> setFirstName(e.target.value)} />

        </div>


        <div>
          <label htmlFor='email' onSubmit={submitHandler}>email</label>
          <input type="email" id="email" name='email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)} />

        </div>
        <button type='submit'> Add user</button>
      </form>

      {users.map((user,index)=>{
        const{firstName,email}=user;
        return(
          <div key={index}>
            <h4>{firstName}</h4>
            <p>{email}</p>

          </div>
        )
      })}
    </article>
  )
}

export default ControlledInputs