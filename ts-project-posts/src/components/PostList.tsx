import React from 'react';
import { PostProps } from '../api/post';

type PostListProps = {
    postList: PostProps[]
}

const PostList = ({ postList }: PostListProps) => {
    return (
        <ul>
            {postList.map((post: PostProps) => 
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )
}

export default PostList;