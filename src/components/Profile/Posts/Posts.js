import React from "react";
import style from './Posts.module.css';
import PostItem from "./Post-item/Post-item";

const Posts = () => {
    let postsData = [
        {id: 1, text: 'Hi i am learning React now', likeCount: 14},
        {id: 2, text: 'Now i learned Props', likeCount: 16},
        {id: 3, text: 'Whats next?', likeCount: 15},
        {id: 3, text: 'Whats next?', likeCount: 15},
    ];
    let postComponents = postsData.map(post => <PostItem content={post.text} likeCount={post.likeCount} />)

    return (
        <div className="posts">
            <h2>My Posts</h2>
            {postComponents}
        </div>
    )
}

export default Posts;