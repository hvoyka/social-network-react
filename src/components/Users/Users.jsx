import React from 'react';
import css from './users.module.css'
import * as axios from 'axios';
import userPhoto from "../../assets/images/user.png"
const Users = (props) => {

  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
        });
    }
  }


  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <ul>{
        props.users.map(u => <li key={u.id}>
          <div>
            <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" width="50px" /></div>
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
    </div>
  );
}
export default Users;