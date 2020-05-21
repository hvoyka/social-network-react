import React from 'react';
import Dialogs from './Dialogs';

import {addDialogMessageActionCreator, typeDialogMessageActionCreator} from '../../redux/dialog-reducer'


const DialogsContainer = (props) => { 
  let state = props.store.getState();

  const addDialogMessage= () =>{
    props.store.dispatch(addDialogMessageActionCreator());
  }

  const typeDialogMessage= (text) =>{ 

    props.store.dispatch(typeDialogMessageActionCreator(text));
  }

  return (    
    <Dialogs dialogsPage={state.dialogsPage} addDialogMessage={addDialogMessage} typeDialogMessage={typeDialogMessage}/> 
  );
}
export default DialogsContainer;