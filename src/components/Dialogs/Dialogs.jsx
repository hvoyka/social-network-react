import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  
  return (
    <li className={s.item}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </li>
  );
}

const Message = (props) => {
  return (
    <li className={s.message}>{props.message}</li>
  );
}

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
  ];
  
  let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How is your work?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
  ];

  let dialogComponentsArr = dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id}/>);

  let messageComponentsArr = messages.map((m) => <Message message={m.message} key={m.id}/>);

  return (
    <div className={s.dialogs}>
      <ul className={s.items}>
        {dialogComponentsArr}       
      </ul>

      <ul className={s.messages}>
        {messageComponentsArr}
      </ul>
    </div>
  );
}
export default Dialogs;