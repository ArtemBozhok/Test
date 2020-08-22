import React from "react";
import style from './Posts.module.css';
import PostItem from "./Post-item/Post-item";

const Posts = () => {
    return (
        <div className="posts">
            <PostItem content="Hi i am learning React now" likeCount='14'/>
            <PostItem content="Now i learned Props" likeCount='16'/>
            <PostItem content="Whats next?" likeCount='15'/>
        </div>
    )
}

export default Posts;