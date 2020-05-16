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
  },
 addDialogMessage: function  () {
    if(state.dialogsPage.newDialogMessage){
      let newMessage = {
        id: 5,
        message: this.dialogsPage.newDialogMessage
      }
      this.dialogsPage.messages.push(newMessage);
      this.dialogsPage.newDialogMessage = "";
      this.rerenderEntireTree(this);
    }  
  },
  typeDialogText: function (text){
    state.dialogsPage.newDialogMessage = text;
    this.rerenderEntireTree(this);
  },
  addPost: function() {
    let newPost = {
      id: 5,
      message: this.profilePage.newPostMessage,
      likesCount: 0
    }
    this.profilePage.posts.push(newPost);
    this.profilePage.newPostMessage = "";
    this.rerenderEntireTree(this);
  },  
  typeText: function(text)  {
    this.profilePage.newPostMessage = text;
    this.rerenderEntireTree(this);
  },
  rerenderEntireTree: function  () {
    console.log("State is not changed!");
  },
  subscribe: function (observer) {
    this.rerenderEntireTree = observer;
  }
}
export {state};