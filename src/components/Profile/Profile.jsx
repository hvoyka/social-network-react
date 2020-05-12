import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log('Profile', props)
  return (
    <div>
      <ProfileInfo /> 
      <MyPosts posts={props.posts}/>
    </div>
  );
}
export default Profile;