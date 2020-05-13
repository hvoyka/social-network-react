import React from 'react';
import Navbar from './Navbar/Navbar';
import css from './Sidebar.module.css';
import Friends from './Friends/Friends'

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <Navbar/>
      <Friends/>
    </aside>
  );
}
export default Sidebar;
