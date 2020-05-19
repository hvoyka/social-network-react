
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';

let store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      newPostMessage: 'hello!',
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 5},
      ]
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Stas'},
        {id: 2, name: 'Olya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Anya'},
      ]
    }
  },
  _callSubscriber() {
    console.log("State is not changed!");
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch (action) { 
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
}


export {store};