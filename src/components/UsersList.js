import React from 'react';

const UsersList = ({users, setUserSelected, deleteUser}) => {
    return (
        <ul className='list-container'>
            {
                users.map(user => (
                    <li key={user.id}>
                       <div className='personalinfo'>
                           <h4>{user.first_name}</h4> 
                           <h4>{user.last_name}</h4>
                           <p>{user.email}</p> 
                           <p><i className="fas fa-birthday-cake"></i> {user.birthday}</p>
                       </div>
                       <div className='iconsinfo'>
                       <button 
                           className='red' 
                           onClick={()=>deleteUser(user.id)}>
                           <i className="fas fa-trash-alt"></i>
                        </button >
                       <button 
                            className='black' 
                            onClick={ ()=> setUserSelected(user)}>
                            <i className="fas fa-edit"></i>
                        </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;