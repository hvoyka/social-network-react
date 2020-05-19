
const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const TYPE_DIALOG_TEXT = 'TYPE-DIALOG-TEXT';


export const dialogReducer = (state, action) => { 
  switch(action.type){
    case ADD_DIALOG_MESSAGE:
      if(state.newDialogMessage){
        let newMessage = {
          id: 5,
          message: state.newDialogMessage
        }
        state.messages.push(newMessage);
        state.newDialogMessage = "";
      }
      break;
    case TYPE_DIALOG_TEXT:
      state.newDialogMessage = action.text;
      break;
    default:
      return state;
  }
  return state;
}

export const addDialogMessageActionCreator = () => ({type: ADD_DIALOG_MESSAGE});
export const typeDialogMessageActionCreator = (text) => ({type: TYPE_DIALOG_TEXT, text: text});
