import React from 'react';
import Navbar from './Navbar/Navbar';
import css from './Sidebar.module.css';
import Friends from './Friends/Friends'

const Sidebar = (props) => {
  return (
    <aside className={css.sidebar}>
      <Navbar/>
      <Friends friends={props.state.friends}/>
    </aside>
  );
}
export default Sidebar;
