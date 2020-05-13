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
    ]
  },
  profilePage: {
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

let addPost = (postMessage) => {
    let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export {state, addPost};