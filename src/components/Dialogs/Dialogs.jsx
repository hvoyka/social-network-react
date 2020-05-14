import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const MyMessage = (props) => {
  let myMessage = React.createRef();

  const addDialogMessage= () =>{
    props.addDialogMessage();
  }

  const typeDialogMessage= () =>{  
    let text = myMessage.current.value;    
    props.typeDialogText(text);    
  }
  return (
    <div>
      <textarea onChange={typeDialogMessage} ref={myMessage}></textarea>
      <button onClick={addDialogMessage}>Send</button>
    </div>
  );
};

const Dialogs = (props) => { 

  let dialogComponentsArr = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id}/>);

  let messageComponentsArr = props.state.messages.map((m) => <Message message={m.message} key={m.id}/>);

  return (
    <div className={css.dialogs}>
      <ul className={css.items}>
        {dialogComponentsArr}       
      </ul>

      <ul className={css.messages}>
        {messageComponentsArr}
      </ul>
      <MyMessage addDialogMessage={props.addDialogMessage} typeDialogText={props.typeDialogText}/>
    </div>
  );
}
export default Dialogs;