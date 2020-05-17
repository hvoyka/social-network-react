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
  getState(){
    return this._state;
  },
  addDialogMessage() {
    if(this._state.dialogsPage.newDialogMessage){
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newDialogMessage
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newDialogMessage = "";
      this._callSubscriber(this._state);
    }  
  },
  typeDialogText(text){
    this._state.dialogsPage.newDialogMessage = text;
    this._callSubscriber(this._state);
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostMessage,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostMessage = "";
    this._callSubscriber(this._state);
  },  
  typeText(text)  {
    this._state.profilePage.newPostMessage = text;
    this._callSubscriber(this._state);
  },
  _callSubscriber() {
    console.log("State is not changed!");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}
export {store};