import React from 'react';

import MyPosts from './MyPosts';

import {addPostActionCreator, TypePostTextActionCreator} from '../../../redux/profile-reducer'
const MyPostsContainer = (props) => {
  let state = props.store.getState();
  
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  const typePostText = (text) => { 
    props.store.dispatch(TypePostTextActionCreator(text));
  }
  return (
    <MyPosts addPost={addPost} typePostText={typePostText} profilePage={state.profilePage}/>
    );
}
export default MyPostsContainer;