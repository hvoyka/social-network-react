import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (    
    <div className={s.item}>
        <img src="https://avatarfiles.alphacoders.com/792/thumb-79295.jpg" alt=""/>
       <p>Post 1</p>
       <button>Like</button>
      </div>        
    );
}
export default Post;