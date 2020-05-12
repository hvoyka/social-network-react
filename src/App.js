import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


function App(props) {
  console.log('app', props)
  let posts = props.posts;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper__content'>
        
          <Route path="/dialogs">
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
          </Route>
          <Route path="/profile">
              <Profile posts={props.posts} />
          </Route>

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
