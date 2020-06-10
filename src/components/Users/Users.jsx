import React from 'react';
import css from './users.module.css'
import * as axios from 'axios';
import userPhoto from "../../assets/images/user.png"


class Users extends React.Component {
  
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items);
        });
    }   
  }
  render() {
    return (
      <div>
        <ul>{
          this.props.users.map(u => <li key={u.id}>
            <div>
              <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" width="50px" /></div>
              {
                u.followed
                  ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                  : <button onClick={() => this.props.follow(u.id)}>Follow</button>}this.
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
}

export default Users;
