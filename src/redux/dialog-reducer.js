
const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' },
  ],
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How is your work?' },
    { id: 3, message: 'Yo!' },
    { id: 4, message: 'Yo!' },
  ],
};

export const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG_MESSAGE: 
      let newMessage = {
        id: 5,
        message: action.newMessageBody
      }
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };

    default:
      return state;
  }

}

export const addDialogMessageActionCreator = (newMessageBody) => ({ type: ADD_DIALOG_MESSAGE, newMessageBody });
