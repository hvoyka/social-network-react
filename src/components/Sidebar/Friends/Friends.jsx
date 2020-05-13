import React from 'react';
import css from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem'

const Friends = () => {
  return (
    <ul className={css.list}>
      <FriendsItem/>
      <FriendsItem/>     
    </ul>
  );
}
export default Friends;