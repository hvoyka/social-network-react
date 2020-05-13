import React from 'react';
import css from './FriendsItem.module.css';

const FriendsItem = (props) => {
  return (
    <li className={css.item}>
        <div className={css.avatar}>{props.id}
        </div>
        <span className={css.name}>{props.name}</span>
    </li>
  );
}

export default FriendsItem;