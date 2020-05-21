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


function App(props) {

  return (
      <div className='app-wrapper'>
        <Header />
        {<Sidebar state={props.store.getState().sidebar}/>}
        <div className='app-wrapper__content'>

          <Route path="/dialogs">
              <DialogsContainer 
               store={props.store} 
              />
          </Route>
          <Route path="/profile">
              <Profile 
              store={props.store}                   
             />
          </Route>

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
}

export default App;
