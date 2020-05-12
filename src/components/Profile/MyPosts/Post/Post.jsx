import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
  return (    
    <div className={css.item}>
        <img src="https://avatarfiles.alphacoders.com/792/thumb-79295.jpg" alt=""/>
       <p>{props.message}</p>
       <button>Like</button>
       <span>{props.likesCount}</span>
      </div>        
    );
}
export default Post;