import React from 'react';
import css from './users.module.css'

const Users = (props) => {
  if(props.users.length === 0){
    props.setUsers([
      {
        id: 1, followed: true, avatarUrl: 'https://image.freepik.com/free-vector/_24877-60111.jpg', name: 'Stanislav', status: "GOGOGO!", location: {
          city: 'Omsk',
          country: 'Russia'
        }
      },
      {
        id: 2, followed: true, avatarUrl: 'https://image.freepik.com/free-vector/_24877-60111.jpg', name: 'Dmitrich', status: "HEY!", location: {
          city: 'Minsk',
          country: 'Belarus'
        }
      },
      {
        id: 3, followed: false, avatarUrl: 'https://image.freepik.com/free-vector/_24877-60111.jpg', name: 'Andrey', status: "hi evereone!", location: {
          city: 'Moscow',
          country: 'Russia'
        }
      }]);
  }
 
  return (
    <ul>{
      props.users.map(u => <li key={u.id}>
        <div>
          <div><img src={u.avatarUrl} alt="" width="50px" /></div>
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