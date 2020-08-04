import React from 'react';
import css from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  debugger
  return (
    <div className={css.profile}>
      <ProfileInfo profile={props.profile} status={props.status}/>       
      <MyPostsContainer/>
    </div>
  );
}
export default Profile;