import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  console.log('myposts', props.posts)
  let postComponentsArr = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}  key={p.id}/>);

  return (
    <div className={css.wrap}>
     <h3>My Posts</h3> 
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={css.posts}>
        {postComponentsArr}  
       </div>
    </div>);
}
export default MyPosts;