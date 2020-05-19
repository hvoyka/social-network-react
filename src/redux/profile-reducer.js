
const ADD_POST = 'ADD-POST';
const TYPE_POST_TEXT = 'TYPE-POST-TEXT';
export const profileReducer = (state, action) => {

  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostMessage,
        likesCount: 0
      }
      state.posts.push(newPost);
      state.newPostMessage = "";
      break;
    case TYPE_POST_TEXT:
      state.newPostMessage = action.text;
      break;
    default:
      return state;
  }
  return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const TypePostTextActionCreator = (text) =>  ({type: TYPE_POST_TEXT, text: text});