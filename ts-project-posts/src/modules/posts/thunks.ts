import { ThunkAction } from 'redux-thunk';
import { getPosts, getPostById } from '../../api/post';
import { getPostsAsync, getPostAsync } from './actions';
import { PostState, PostActions } from './types';

export const getPostsThunk = (): ThunkAction<void, PostState, null, PostActions> => async dispatch => {
    dispatch(getPostsAsync.request());
    try {
        const payload = await getPosts();
        dispatch(getPostsAsync.success(payload));
    } catch(e) {
        dispatch(getPostsAsync.failure(e));
    }
};

export const getPostThunk = (param: number): ThunkAction<void, PostState, null, PostActions> => async dispatch => {
        dispatch(getPostAsync.request());
        try {
            const payload = await getPostById(param);
            payload && dispatch(getPostAsync.success(payload));
        } catch(e) {
            dispatch(getPostsAsync.failure(e));
        }
    };