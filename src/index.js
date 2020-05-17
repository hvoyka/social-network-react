import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {store} from './redux/state'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
         <App state={state} addPost={store.addPost.bind(store)} typeText={store.typeText.bind(store)}  addDialogMessage={store.addDialogMessage.bind(store)} typeDialogText={store.typeDialogText.bind(store)}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );  
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());

