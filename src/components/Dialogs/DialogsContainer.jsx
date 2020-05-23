import React from 'react';
import Dialogs from './Dialogs';
import {StoreContext} from '../../StoreContext'
import {addDialogMessageActionCreator, typeDialogMessageActionCreator} from '../../redux/dialog-reducer'


const DialogsContainer = (props) => { 
  

  return (
    <StoreContext.Consumer>
      {(store) => {
      
        const addDialogMessage= () =>{
          store.dispatch(addDialogMessageActionCreator());
        }
      
        const typeDialogMessage= (text) =>{ 
      
          store.dispatch(typeDialogMessageActionCreator(text));
        }
        return ( <Dialogs 
          dialogsPage={store.getState().dialogsPage} addDialogMessage={addDialogMessage} typeDialogMessage={typeDialogMessage}/>)
       
      }}
    </StoreContext.Consumer>
    
  );
}
export default DialogsContainer;