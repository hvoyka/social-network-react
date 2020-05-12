import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  
  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 5},
  ];
  
  return (
    <div>
      <ProfileInfo /> 
      <MyPosts posts={posts}/>
    </div>
  );
}
export default Profile;