
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState (null);

useEffect(()=>{
axios.get("https://users-crud1.herokuapp.com/users/")
.then(res=> setUsers(res.data))
},[])
console.log(users)

const getUsers = () => {
  axios.get("https://users-crud1.herokuapp.com/users/")
  .then(res => setUsers(res.data))
}
const deleteUser = id =>{
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
  .then(()=> getUsers());
}


console.log(userSelected);
  return (
    <div className="App">
        <UsersForm getUsers={getUsers} userSelected = {userSelected} setUserSelected = {setUserSelected}/>
        <UsersList users={users} setUserSelected = {setUserSelected} deleteUser = {deleteUser}/>
    </div>
  );
}

export default App;
