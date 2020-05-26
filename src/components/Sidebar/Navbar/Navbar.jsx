import React from 'react';
import  css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <nav className={css.nav}>
            <ul className={css.list}>
              <li className={css.item}>
                <NavLink to='/profile' activeClassName={css.active}>Profile</NavLink>
              </li>
              <li className={css.item}>
                <NavLink to='/dialogs' activeClassName={css.active}>Messages</NavLink>
              </li>
              <li className={css.item}>
                <NavLink to='/news' activeClassName={css.active}>News</NavLink>
              </li>
              <li className={css.item}>
                <NavLink to='/users' activeClassName={css.active}>Users</NavLink>
              </li>
              <li className={css.item}>
                <NavLink to='/music' activeClassName={css.active}>Music</NavLink>
              </li>
              <li className={css.item}>
                <NavLink to='/settings' activeClassName={css.active}>Settings</NavLink>
              </li>
            </ul>
          </nav>;
}
export default Navbar;