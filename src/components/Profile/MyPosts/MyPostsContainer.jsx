import React from 'react';
import { StoreContext } from '../../../StoreContext';
import MyPosts from './MyPosts';

import { addPostActionCreator, TypePostTextActionCreator } from '../../../redux/profile-reducer'
const MyPostsContainer = (props) => {

 
  return (
    <StoreContext.Consumer>
      {(store) => {
         const addPost = () => {
           store.dispatch(addPostActionCreator());
         }
         const typePostText = (text) => {
           store.dispatch(TypePostTextActionCreator(text));
         }
        return ( <MyPosts addPost={addPost}
          typePostText={typePostText}
          profilePage={store.getState().profilePage} />)
       
      }}
    </StoreContext.Consumer>
  );
}
export default MyPostsContainer;