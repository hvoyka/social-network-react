import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
  let postComponentsArr = props.profilePage.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  const addNewPost = (formData) => {
    console.log(formData.newPostBody)
    props.addPost(formData.newPostBody);
  }

  return (
    <div className={css.wrap}>
      <h3>My Posts</h3>
      <AddPostReduxForm onSubmit={addNewPost}/>
      <div className={css.posts}>
        {postComponentsArr}
      </div>
    </div>);
}
const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field component="textarea" name="newPostBody" placeholder="Enter your post" />
      </div>
      <button>Add post</button>
    </form>
  );
}

const AddPostReduxForm = reduxForm({
  form: 'profileAddPost'
})(MyPostForm);

export default MyPosts;