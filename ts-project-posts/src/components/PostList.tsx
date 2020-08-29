import React from 'react';
import { Link } from 'react-router-dom';
import { PostProps } from '../api/post';

type PostListProps = {
    postList: PostProps[]
}

const PostList = ({ postList }: PostListProps) => {
    return (
        <ul>
            {postList.map((post: PostProps) => 
                <li key={post.id}>
                    <Link to={`/${post.id}`}>{post.title}</Link>
                </li>
            )}
        </ul>
    )
}

export default PostList;