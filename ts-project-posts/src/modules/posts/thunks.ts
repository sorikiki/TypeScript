import { useSelector } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { getPosts, getPostById } from '../../api/post';
import { getPostsAsync, getPostAsync } from './actions';
import { PostState, PostActions } from './types';
import { PostProps } from '../../api/post';

export const getPostsThunk = (payload: null | PostProps[]): ThunkAction<void, PostState, null, PostActions> => async (dispatch) => { 
    dispatch(getPostsAsync.request(payload));
    try {
        const payload = await getPosts();
        dispatch(getPostsAsync.success(payload));
    } catch(e) {
        dispatch(getPostsAsync.failure(e));
    }
};

export const getPostThunk = (param: number): ThunkAction<void, PostState, null, PostActions> => async dispatch => {
        dispatch(getPostAsync.request(null));
        try {
            const payload = await getPostById(param);
            payload && dispatch(getPostAsync.success(payload));
        } catch(e) {
            dispatch(getPostsAsync.failure(e));
        }
    };