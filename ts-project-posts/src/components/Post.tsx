import React from 'react';
import { PostProps } from '../api/post';

const Post = ({ post }: { post: PostProps }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
        </div>
    )
}

export default Post;
