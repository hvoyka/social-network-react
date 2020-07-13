import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';



const Header = (props) => {
  return <header className={css.header}>
    <img className={css.logo} src="https://avatars3.githubusercontent.com/u/46483437?s=460&v=4" />
    <div className={css.loginBlock}>
      {props.isAuth ? props.login :
      <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>;
}
export default Header;