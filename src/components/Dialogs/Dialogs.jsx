import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const MyMessage = () => {
  let myMessage = React.createRef();
  const sendMessage= () =>{
    alert(myMessage.current.value);
  }
  return (
    <div>
      <textarea ref={myMessage}></textarea>
      <button onClick={sendMessage}>Send</button>
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
      <MyMessage/>
    </div>
  );
}
export default Dialogs;