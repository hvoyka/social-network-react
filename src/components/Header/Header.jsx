import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/forest.png';




const Header = (props) => {
  return <header className={css.header}>

    <img className={css.logo} src={Logo} alt="logo-social-network"/>
    <div className={css.loginBlock}>
      {props.isAuth ? props.login :
      <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>;
}
export default Header;