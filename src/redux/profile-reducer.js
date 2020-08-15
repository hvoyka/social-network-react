import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 5 },
  ],
  profile: null,
  status: ""
};

export const profileReducer = (state = initialState, action) => {


  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostBody,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }

}

export const addPostActionCreator = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });


export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
    });
}
export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(data => {
      dispatch(setUserStatus(data));
    });
}
export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(data => {
      if(data.resultCode === 0){
        dispatch(setUserStatus(status));
      }     
    });
}