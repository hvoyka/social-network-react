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
const addDialogMessage = () => {
  if(state.dialogsPage.newDialogMessage){
    let newMessage = {
      id: 5,
      message: state.dialogsPage.newDialogMessage
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newDialogMessage = "";
    rerenderEntireTree(state);
  }  
}

const typeDialogText = (text) => {
  state.dialogsPage.newDialogMessage = text;
  rerenderEntireTree(state);
}

const addPost = () => {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostMessage,
      likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostMessage = "";
    rerenderEntireTree(state);
}
const typeText = (text) => {
  state.profilePage.newPostMessage = text;
  rerenderEntireTree(state);
}
let rerenderEntireTree = () => {
  console.log("State is not changed!");
}
const subscribe = (observer) => {
  rerenderEntireTree = observer;
}
export {state, subscribe,  addPost, typeText, addDialogMessage, typeDialogText};