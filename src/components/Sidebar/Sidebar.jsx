import React from 'react';
import Navbar from './Navbar/Navbar';
import css from './Sidebar.module.css';
import FriendsContainer from './Friends/FriendsContainer';

const Sidebar = (props) => {
  return (

    <aside className={css.sidebar}>
      <Navbar />
      <FriendsContainer />
    </aside>
  );
}


export default Sidebar;
