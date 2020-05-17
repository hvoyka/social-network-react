import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

import {addPostActionCreator, TypePostTextActionCreator} from '../../../redux/state'
const MyPosts = (props) => {

  let postComponentsArr = props.profilePage.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}  key={p.id}/>);
  
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  const typePostText = (evt) => {
    let text = evt.target.value;    
    props.dispatch(TypePostTextActionCreator(text));
  }
  return (
    <div className={css.wrap}>
     <h3>My Posts</h3> 
      <div>
        <div>
          <textarea onChange={typePostText} value={props.profilePage.newPostMessage}/>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={css.posts}>
        {postComponentsArr}  
       </div>
    </div>);
}
export default MyPosts;