import React from 'react';

const Profile = () => {
  return <div className='content'>
    <div className='content__img-box'>
      <img className='content__img' src='https://www.w3schools.com/howto/img_snow_wide.jpg' />
    </div>
    <div className='content__profile'>
      <img className='profile__avatar' src='https://platform.bz/assets/img/noavatar.jpg' />
      <div className='profile__info'></div>
    </div>
    <div>
      Posts
    <div>New Post</div>
      <div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  </div>;
}
export default Profile;