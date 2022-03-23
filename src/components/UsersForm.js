import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected, setUserSelected}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")

    useEffect(()=> {
        if(userSelected){
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }

    },[userSelected]);

    console.log(userSelected);
    
    const submit = e => {
        e.preventDefault();
        const user = {
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            birthday,
        }
       if(userSelected){
           console.log("me actualice")
           axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
           .then(()=>{
               getUsers()
               setUserSelected(null)
               reset()
           });
       }else{
        axios.post("https://users-crud1.herokuapp.com/users/",user)
        .then(() => {
            getUsers()
            reset()
         })
         .catch(error => console.log(error.response));
       }
       
    }
    const reset = ()=> {
        setUserSelected(null);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
    }
   
    return (
        <form onSubmit = {submit}>
            <h1>User</h1>
            <div className='name-container'>
            <div className='input-container'>
                <label htmlFor="firstName"><b>First Name</b> </label>
                <input 
                    type="text"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                 />
            </div>
            <div className='input-container'>
                <label htmlFor="lastName"><b>Last Name</b> </label>
                <input 
                    type="text"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                 />
            </div>
            </div>
            <div className='data-container'>
            <div className='input-container'>
                <label htmlFor="email"><i className="fas fa-envelope"></i> </label>
                <input 
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                 />
            </div>
            <div className='input-container'>
                <label htmlFor="password"><i className="fas fa-lock"></i> </label>
                <input 
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                 />
            </div>
            <div className='input-container'>
                <label htmlFor="birthday"><i className="fas fa-birthday-cake"></i>  </label>
                <input 
                    type="date"
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                 />
            </div>
            </div>
            <button><b>Update / Create</b></button>
            <button onClick={()=> reset()}type="button" ><b>Unselect</b></button>
            
        </form>
    );
};

export default UsersForm;