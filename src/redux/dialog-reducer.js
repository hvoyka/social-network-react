
const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const TYPE_DIALOG_TEXT = 'TYPE-DIALOG-TEXT';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
  ],
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How is your work?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
  ],
  newDialogMessage: 'Dialog msg!'
};

export const dialogReducer = (state = initialState, action) => { 
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
