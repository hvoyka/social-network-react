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
  dispatch (action) { //{type: '', text: ''}
    if(action.type === 'ADD-DIALOG-MESSAGE'){
      if(this._state.dialogsPage.newDialogMessage){
        let newMessage = {
          id: 5,
          message: this._state.dialogsPage.newDialogMessage
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newDialogMessage = "";
        this._callSubscriber(this._state);
      }  
    } else if (action.type === 'TYPE-DIALOG-TEXT') {
      this._state.dialogsPage.newDialogMessage = action.text;
    this._callSubscriber(this._state);
    } else if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostMessage,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostMessage = "";
      this._callSubscriber(this._state);
    } else if (action.type === 'TYPE-POST-TEXT') {
      this._state.profilePage.newPostMessage = action.text;
      this._callSubscriber(this._state);
    }
  },

}
export {store};