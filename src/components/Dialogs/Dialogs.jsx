import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={s.item + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>

  );
}

const Dialogs = (props) => {

  let dialogData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
  ];
  
  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How is your work?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        {dialogData.map((item) => {
          return (
          <DialogItem name={item.name} id={item.id} />
          )
        })}       
      </div>

      <div className={s.messages}>
        {messagesData.map((item) => {
          return (
          <Message message={item.message} />
          )
        })}
      </div>
    </div>
  );
}
export default Dialogs;