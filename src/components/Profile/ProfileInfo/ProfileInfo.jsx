import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={css.profile}>
        <div className={css.name}>{props.profile.fullName}</div>
        <img className={css.avatar} src={props.profile.photos.small} alt="avatar"/>
        <div className='profile__info'>{props.profile.aboutMe}</div>
      </div>
    </div>);
}
export default ProfileInfo;