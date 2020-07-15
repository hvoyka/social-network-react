import React from 'react';
import userPhoto from '../../assets/images/user.png'
import css from './users.module.css'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }



  return (
    <div>
      <div className={css.pagination}>
        {pages.map(p => {
          return (
            <span className={(props.currentPage === p) ? css.selectedPage : ""} onClick={() => { props.onPageChanged(p) }}>{p}</span>
          )
        })}

      </div>
      <ul>
        {
          props.users.map(u => <li key={u.id}>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" width="50px" /></div>
              </NavLink>
              {
                u.followed
                  ? <button onClick={
                    () => {
                      usersAPI.unfollowUser(u.id).then(data => {
                          if (data.resultCode === 0) {
                            props.unfollow(u.id)
                          }
                        });                      
                    }
                  }>Unfollow</button>
                  : <button onClick={
                    () => {
                      usersAPI.followUser(u.id).then(data => {
                        if (data.resultCode === 0) {
                          props.follow(u.id)
                        }
                      });  
                    }
                  }>Follow</button>}
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