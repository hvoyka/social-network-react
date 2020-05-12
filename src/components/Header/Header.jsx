import React from 'react';
import css from './Header.module.css';

const Header = () => {
  return <header className={css.header}>
  <img className={css.logo} src="https://avatars3.githubusercontent.com/u/46483437?s=460&v=4"/>
</header>;
}
export default Header;