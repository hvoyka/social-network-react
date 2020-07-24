import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const MyMessage = (props) => {

  const onAddDialogMessage= () =>{
    props.addDialogMessage();
  }

  const onTypeDialogMessage= (evt) =>{
    let text = evt.target.value;
    props.typeDialogMessage(text)
  }
  return (
    <div>
      <textarea onChange={onTypeDialogMessage} value={props.newDialogMessage}></textarea>
      <button onClick={onAddDialogMessage}>Send</button>
    </div>
  );
};

const Dialogs = (props) => { 

  let dialogComponentsArr = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id}/>);

  let messageComponentsArr = props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id}/>);

  return (
    <div className={css.dialogs}>
      <ul className={css.items}>
        {dialogComponentsArr}       
      </ul>

      <ul className={css.messages}>
        {messageComponentsArr}
         <MyMessage addDialogMessage={props.addDialogMessage} typeDialogMessage={props.typeDialogMessage} newDialogMessage={props.dialogsPage.newDialogMessage}/>
      </ul>
     
    </div>
  );
}
export default Dialogs;