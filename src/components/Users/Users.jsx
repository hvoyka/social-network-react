import React from 'react';
import css from './users.module.css'

const Users = (props) => {
  return (
    <ul>{
      props.users.map(u => <li key={u.id}>
        <div>
          <div><img src={u.avatarUrl} alt="" width="50px"/></div>
      {
      u.followed 
      ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> 
      : <button onClick={() => props.follow(u.id)}>Follow</button>}
        </div>
        <div>
          <div>{u.name}</div>
          <div>{u.status}</div>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>          
        </div>
      </li>)
    }
    </ul>
  );
}
export default Users;