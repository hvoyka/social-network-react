import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 5},
  ];
  let postComponentsArr = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

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
        {postComponentsArr}  
       </div>
    </div>);
}
export default MyPosts;