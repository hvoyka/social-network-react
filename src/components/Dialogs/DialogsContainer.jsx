import Dialogs from './Dialogs';
import {addDialogMessageActionCreator, typeDialogMessageActionCreator} from '../../redux/dialog-reducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect  
)(Dialogs);