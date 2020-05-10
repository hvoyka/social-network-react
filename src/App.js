import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img className="logo" src="https://seeklogo.com/images/C/company-name-logo-C74A7D6F5A-seeklogo.com.png"/>
      </header>
      <nav className='nav'>
        <ul className='nav__list'>
          <li><a>Profile</a></li>
          <li><a>Messages</a></li>
          <li><a>News</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>
      <div className='content'>
        <div className='content__img-box'>
            <img className='content__img' src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
        </div>
        <div className='content__profile'>
          <img className='profile__avatar' src='https://platform.bz/assets/img/noavatar.jpg'/>
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
      </div>
    </div>
  );
}

export default App;
