import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {state} from './redux/state'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
         <App state={state} addPost={state.addPost.bind(state)} typeText={state.typeText.bind(state)}  addDialogMessage={state.addDialogMessage.bind(state)} typeDialogText={state.typeDialogText.bind(state)}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );  
}

state.subscribe(rerenderEntireTree);

state.rerenderEntireTree(state);

