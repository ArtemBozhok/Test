import React from "react";
import style from './Posts.module.css';
import PostItem from "./Post-item/Post-item";

const Posts = (props) => {
    let postsData = props.state;
    let postComponents = postsData.map(post => <PostItem content={post.text} likeCount={post.likeCount} />)

    return (
        <div className="posts">
            <h2>My Posts</h2>
            {postComponents}
        </div>
    )
}

export default Posts;