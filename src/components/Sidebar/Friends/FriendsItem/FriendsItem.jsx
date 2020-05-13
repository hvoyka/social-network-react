import React from 'react';
import css from './FriendsItem.module.css';

const FriendsItem = () => {
  return (
    <li className={css.item}>
        <div className={css.avatar}>         
        </div>
        <span className={css.name}>Stas</span>        
    </li>
  );
}

export default FriendsItem;