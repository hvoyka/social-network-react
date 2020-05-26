import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/Users';


function App(props) {

  return (
      <div className='app-wrapper'>
        <Header />
        <Sidebar/>
        <div className='app-wrapper__content'>

          <Route path="/dialogs">
              <DialogsContainer/>
          </Route>
          <Route path="/profile">
              <Profile/>
          </Route>
          <Route path="/users">
              <UsersContainer/>
          </Route>

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
}

export default App;
