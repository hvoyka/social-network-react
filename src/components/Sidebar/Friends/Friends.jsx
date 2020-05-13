import React from 'react';
import css from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem'

const Friends = (props) => {
  let friendComponentsAr = props.friends.map(f =>  <FriendsItem name={f.name} id={f.id}/>)

  return (
    <ul className={css.list}>     
      {friendComponentsAr}
    </ul>
  );
}
export default Friends;