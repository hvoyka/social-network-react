import Dialogs from './Dialogs';
import {addDialogMessageActionCreator, typeDialogMessageActionCreator} from '../../redux/dialog-reducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


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
const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer;