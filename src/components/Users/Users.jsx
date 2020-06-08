import React from 'react';
import css from './users.module.css'
import * as axios from 'axios';
const Users = (props) => {
  if(props.users.length === 0){

    axios.get("https://social-network.samuraijs.com/api/1.0/users?count=20")
          .then(response => {

            props.setUsers(response.data.items);
          });

    
  }
 
  return (
    <ul>{
      props.users.map(u => <li key={u.id}>
        <div>
          <div><img src={u.photos.small} alt="" width="50px" /></div>
          {
            u.followed
              ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => props.follow(u.id)}>Follow</button>}
        </div>
        <div>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </div>
      </li>)
    }
    </ul>
  );
}
export default Users;