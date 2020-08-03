import React from 'react';
import css from './ProfileInfo.module.css';


const ProfileStatus = (props) => {
  return (
    <div className={css.status}>
      <div>
        <span>{props.status}</span>
      </div>
      <div>
        <input value={props.status}/>
      </div>
    </div>);
}
export default ProfileStatus;