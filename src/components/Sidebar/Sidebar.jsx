import React from 'react';
import Navbar from './Navbar/Navbar';
import css from './Sidebar.module.css';
import Friends from './Friends/Friends';
import {StoreContext} from '../../StoreContext';
const Sidebar = (props) => {
  return (

    <aside className={css.sidebar}>
    <Navbar/>  
    <StoreContext.Consumer>
    {(store) => {

      return (             
       <Friends friends={store.getState().sidebar.friends}/>     
      )     
    }}
  </StoreContext.Consumer>
  </aside>
  );
}
export default Sidebar;
