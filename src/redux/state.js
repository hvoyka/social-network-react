import {rerenderEntireTree} from './../render';


let state = {
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
}
let addDialogMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newDialogMessage
  }
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newDialogMessage = "";
  rerenderEntireTree(state);
}

let typeDialogText = (text) => {
  state.dialogsPage.newDialogMessage = text;
  rerenderEntireTree(state);
}

let addPost = () => {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostMessage,
      likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostMessage = "";
    rerenderEntireTree(state);
}
let typeText = (text) => {
  state.profilePage.newPostMessage = text;
  rerenderEntireTree(state);
}

export {state, addPost, typeText, addDialogMessage, typeDialogText};