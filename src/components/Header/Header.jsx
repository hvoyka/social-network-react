import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return <header className={s.header}>
  <img className={s.logo} src="https://avatars3.githubusercontent.com/u/46483437?s=460&v=4"/>
</header>;
}
export default Header;