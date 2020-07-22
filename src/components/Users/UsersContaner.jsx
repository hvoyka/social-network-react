import React from 'react';
import Users from './Users'
import { connect } from 'react-redux';
import { follow, unfollow, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';




class UsersContainer extends React.Component {

  componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {   
    return <>
          {this.props.isFetching ? <Preloader/> : null}
          <Users 
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            isFetching={this.props.isFetching}

            followingProcess= {this.props.followingProcess}

            onPageChanged={this.onPageChanged}
          />
     </>;
  }
}



const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProcess: state.usersPage.followingProcess
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers
})(UsersContainer);