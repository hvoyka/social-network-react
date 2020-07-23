import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContaner';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';


function App(props) {

  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar/>
        <div className='app-wrapper__content'>

          <Route path="/dialogs">
              <DialogsContainer/>
          </Route>
          <Route path="/profile/:userId?">
              <ProfileContainer/>
          </Route>
          <Route path="/users">
              <UsersContainer/>
          </Route>

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' component={LoginPage} />
        </div>
      </div>
  );
}

export default App;
