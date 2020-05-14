import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {addPost, typeText,  addDialogMessage, typeDialogText} from './redux/state'

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
         <App state={state} addPost={addPost} typeText={typeText}  addDialogMessage={addDialogMessage} typeDialogText={typeDialogText}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}

