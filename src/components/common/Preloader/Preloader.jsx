import React from 'react';
import css from './Preloader.module.css';

const Preloader = (props) => {
  return (
    <div className={css.ldsripple}><div></div><div></div></div>
  );
}
export default Preloader;