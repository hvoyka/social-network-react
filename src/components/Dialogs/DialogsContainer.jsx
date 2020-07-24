import React from 'react';
import Dialogs from './Dialogs';
import {addDialogMessageActionCreator, typeDialogMessageActionCreator} from '../../redux/dialog-reducer';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


const AuthRedirectComponent = (props) => {
  if(!props.isAuth) return <Redirect to="/login"/>; 
  return <Dialogs {...props}/>;
}


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth : state.auth.isAuth
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;