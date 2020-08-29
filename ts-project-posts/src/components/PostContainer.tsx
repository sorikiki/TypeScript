import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Post from './Post';
import { getPostThunk } from '../modules/posts/thunks';

const PostContainer = ({ match } : RouteComponentProps<{ id: string }> ) => {
    const stringId = match.params.id;
    const id : number = +stringId;

    const { loading, data, error } = useSelector((state : RootState) => state.postReducer.post);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPostThunk(id));
    }, [dispatch, id])

    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>오류발생</div>
    if(!data) return <div>정보 없음</div>

    return <Post post={data}/>
}

export default PostContainer;