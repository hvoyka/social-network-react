import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const TYPE_POST_TEXT = 'TYPE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  newPostMessage: 'hello!',
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 5},
  ],
  profile: null
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
    case SET_USER_PROFILE: 
      return {...state, profile:  action.profile};

    default:
      return state;
  }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const TypePostTextActionCreator = (text) =>  ({type: TYPE_POST_TEXT, text: text});
export const setUserProfile = (profile) =>  ({type: SET_USER_PROFILE, profile});

export const getProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
  .then(data => {
    dispatch(setUserProfile(data));
  });
}