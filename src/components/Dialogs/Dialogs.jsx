import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={s.item + ' ' + s.active}>Dimych</div>
        <div className={s.item}>Andrey</div>
        <div className={s.item}>Sveta</div>
        <div className={s.item}>Sasha</div>
        <div className={s.item}>Victor</div>
        <div className={s.item}>Valera</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>How is your work?</div>
        <div className={s.message}>Yo!</div>
      </div>
    </div>
  );
}
export default Dialogs;