import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postComponentsArr = props.profilePage.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}  key={p.id}/>);
  let newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
    props.typeText("");
  }
  const typeText = () => {
    let text = newPostElement.current.value;    
    props.typeText(text);    
  }
  return (
    <div className={css.wrap}>
     <h3>My Posts</h3> 
      <div>
        <div>
          <textarea onChange={typeText} ref={newPostElement} value={props.profilePage.newPostMessage}/>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={css.posts}>
        {postComponentsArr}  
       </div>
    </div>);
}
export default MyPosts;