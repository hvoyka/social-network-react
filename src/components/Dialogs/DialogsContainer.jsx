import Dialogs from './Dialogs';
import {addDialogMessageActionCreator, typeDialogMessageActionCreator} from '../../redux/dialog-reducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}
const AuthRedirectFunction = connect(mapStateToPropsForRedirect)(withAuthRedirect(Dialogs));



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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectFunction);

export default DialogsContainer;