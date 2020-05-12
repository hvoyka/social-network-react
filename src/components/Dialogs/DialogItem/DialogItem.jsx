import React from 'react';
import css from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  
  return (
    <li className={css.item}>
      <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
    </li>
  );
}

export default DialogItem;