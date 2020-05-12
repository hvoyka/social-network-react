import React from 'react';
import css from './../Dialogs.module.css';


const Message = (props) => {
  return (
    <li className={css.message}>{props.message}</li>
  );
}

export default Message;