import React from 'react';
import css from './users.module.css'
import * as axios from 'axios';
import userPhoto from "../../assets/images/user.png"


class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(Math.ceil(response.data.totalCount / 100));
          debugger;
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={css.pagination}>
          {pages.map(p => {
            return (
              <span className={(this.props.currentPage === p) ? css.selectedPage : ""} onClick={() => { this.onPageChanged(p) }}>{p}</span>
            )
          })}

        </div>
        <ul>
          {
            this.props.users.map(u => <li key={u.id}>
              <div>
                <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" width="50px" /></div>
                {
                  u.followed
                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
