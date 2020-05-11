import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 5},
  ];

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
        {postData.map((item) => {
            return (
            <Post message={item.message} likesCount={item.likesCount} />
            )
          })}  
       </div>
    </div>);
}
export default MyPosts;