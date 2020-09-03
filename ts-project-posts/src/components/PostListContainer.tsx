import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import PostList from './PostList';
import { postsCreator } from '../modules/posts/actions';

const PostListContainer = () => {
    const { loading, data, error } = useSelector((state : RootState) => state.postReducer.posts);
    const dispatch= useDispatch();

    const [posts, setPosts] = useState(data);

    useEffect(() => {
        dispatch(postsCreator(posts));
        return () => {
            setPosts(posts);
        }
    }, [dispatch, posts])

    if(loading && !data) return <div>로딩중입니다...</div>
    if(error) return <div>오류발생</div>
    if(!data) return null; 

    return <PostList postList={data} />
}
export default PostListContainer;