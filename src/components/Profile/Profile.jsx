import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
    <div className='content__img-box'>
      <img className='content__img' src='https://www.w3schools.com/howto/img_snow_wide.jpg' />
    </div>
    <div className='content__profile'>
      <img className={s.avatar} src='https://platform.bz/assets/img/noavatar.jpg' />
      <div className='profile__info'></div>
    </div>
    <div>
      Posts
    <div>New Post</div>
      <div className='posts'>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  </div>;
}
export default Profile;