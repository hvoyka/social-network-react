import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postComponentsArr = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

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