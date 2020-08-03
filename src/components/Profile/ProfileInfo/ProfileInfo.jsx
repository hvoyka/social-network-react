import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={css.profileInfo}>
        <div className={css.left}>
          <div className={css.name}>{props.profile.fullName}</div>
          <img className={css.avatar} src={props.profile.photos.small} alt="avatar-img" />
          <ProfileStatus status={'Hello, hello!'}/>
        </div>
        <div className={css.right}>
          <div className={css.profileAboutMe}>{props.profile.aboutMe}</div>
        </div>
      </div>
    </div>);
}
export default ProfileInfo;