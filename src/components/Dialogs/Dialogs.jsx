import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import {required, maxLengthCreator} from './../../utilities/validators/validators';

const maxLength50 = maxLengthCreator(50);

const MyMessage = (props) => {

  const addNewMessage = (formData) => {
    props.addDialogMessage(formData.newMessageBody);
  }
  return (
    <AddMessageReduxForm onSubmit={addNewMessage}/>
  );
};
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your message" />
      <button>Send</button>
    </form>
  );
}
const AddMessageReduxForm = reduxForm({
  form: 'dialogAddMessage'
})(AddMessageForm);

const Dialogs = (props) => {

  let dialogComponentsArr = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id} />);

  let messageComponentsArr = props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id} />);

  return (
    <div className={css.dialogs}>
      <ul className={css.items}>
        {dialogComponentsArr}
      </ul>

      <ul className={css.messages}>
        {messageComponentsArr}
        <MyMessage addDialogMessage={props.addDialogMessage}/>
      </ul>

    </div>
  );
}
export default Dialogs;