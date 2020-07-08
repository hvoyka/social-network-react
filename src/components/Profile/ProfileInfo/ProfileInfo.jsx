import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {

  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div className='content__img-box'>
        <img className='content__img' src='https://www.w3schools.com/howto/img_snow_wide.jpg' />
      </div>
      <div className={css.profile}>
        <img className={css.avatar} src={props.profile.photos.small} />
        <div className='profile__info'>{props.profile.aboutMe}</div>
      </div>
    </div>);
}
export default ProfileInfo;