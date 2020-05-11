import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div className='content__img-box'>
        <img className='content__img' src='https://www.w3schools.com/howto/img_snow_wide.jpg' />
      </div>
      <div className={s.profile}>
        <img className={s.avatar} src='https://image.shutterstock.com/image-vector/businessman-avatar-male-face-icon-260nw-538980163.jpg' />
        <div className='profile__info'></div>
      </div>
    </div>);
}
export default ProfileInfo;