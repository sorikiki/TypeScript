import { ThunkAction } from 'redux-thunk';
import { getPosts, getPostById, PostProps } from '../../api/post';
import { getPostsAsync, getPostAsync } from './actions';
import { PostState, PostActions } from './types';

export const getPostsThunk = (payload: null | PostProps[]): ThunkAction<void, PostState, null, PostActions> => async (dispatch) => { 
    dispatch(getPostsAsync.request(payload));
    try {
        const payload = await getPosts();
        dispatch(getPostsAsync.success(payload));
    } catch(e) {
        dispatch(getPostsAsync.failure(e));
    }
};

export const getPostThunk = (param: number): ThunkAction<void, PostState, null, PostActions> => async (dispatch)  => {
        dispatch(getPostAsync.request(null));
        try {
            const payload = await getPostById(param);
            if(payload) return dispatch(getPostAsync.success(payload));
        } catch(e) {
            dispatch(getPostsAsync.failure(e));
        }
    };