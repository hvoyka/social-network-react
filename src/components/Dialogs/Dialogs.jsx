import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const MyMessage = (props) => {

  const addDialogMessage= () =>{
    //props.addDialogMessage();
    props.dispatch({type:'ADD-DIALOG-MESSAGE'});
  }

  const typeDialogMessage= (evt) =>{  
    let text = evt.target.value;
    //props.typeDialogText(text);    
    props.dispatch({type:'TYPE-DIALOG-TEXT', text: text});
  }
  return (
    <div>
      <textarea onChange={typeDialogMessage} value={props.newDialogMessage}></textarea>
      <button onClick={addDialogMessage}>Send</button>
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
      </ul>
      <MyMessage dispatch={props.dispatch} newDialogMessage={props.dialogsPage.newDialogMessage}/>
    </div>
  );
}
export default Dialogs;