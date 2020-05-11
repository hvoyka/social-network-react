import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.wrap}>
     <h3>My Posts</h3> 
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post 
          message='Hi, how are you?' 
          likeCount='5'/>
        <Post 
          message="It's my first post" 
          likeCount='15'/>

      </div>
    </div>);
}
export default MyPosts;