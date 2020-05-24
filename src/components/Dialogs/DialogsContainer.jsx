
import Dialogs from './Dialogs';
import React from 'react';
import {addDialogMessageActionCreator, typeDialogMessageActionCreator} from '../../redux/dialog-reducer';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
   return {
    addDialogMessage: ()=>{
      dispatch(addDialogMessageActionCreator());
    },
    typeDialogMessage:(text)=>{      
      dispatch(typeDialogMessageActionCreator(text));
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;