
const ADD_POST = 'ADD-POST';
const TYPE_POST_TEXT = 'TYPE-POST-TEXT';

let initialState = {
  newPostMessage: 'hello!',
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 5},
  ]
};

export const profileReducer = (state = initialState, action) => {


  switch(action.type) {
    case ADD_POST: 
      let newPost = {
        id: 5,
        message: state.newPostMessage,
        likesCount: 0
      }  
      return {
        ...state,
        newPostMessage: "",
        posts: [...state.posts, newPost]
      }
    
    case TYPE_POST_TEXT: 
      return {...state, newPostMessage:  action.text};

    default:
      return state;
  }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const TypePostTextActionCreator = (text) =>  ({type: TYPE_POST_TEXT, text: text});