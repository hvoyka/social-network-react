import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postComponentsArr = props.profilePage.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}  key={p.id}/>);
  
  const onAddPost = () => {
    props.addPost();
  }
  const onTypePostText = (evt) => {
    let text = evt.target.value;    
    props.typePostText(text);    
  }
  return (
    <div className={css.wrap}>
     <h3>My Posts</h3> 
      <div>
        <div>
          <textarea onChange={onTypePostText} value={props.profilePage.newPostMessage}/>
        </div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={css.posts}>
        {postComponentsArr}  
       </div>
    </div>);
}
export default MyPosts;