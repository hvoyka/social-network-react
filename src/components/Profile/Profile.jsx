import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div className='content__img-box'>
        <img className='content__img' src='https://www.w3schools.com/howto/img_snow_wide.jpg' />
      </div>
      <div className='content__profile'>
        <img className={s.avatar} src='https://platform.bz/assets/img/noavatar.jpg' />
        <div className='profile__info'></div>
      </div>
      <MyPosts />
    </div>
  );
}
export default Profile;