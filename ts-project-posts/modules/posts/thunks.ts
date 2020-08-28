import { getPosts, getPostById } from '../../api/post';
import { getPostsAsync, getPostAsync } from './actions';

export const getPostsThunk = () => {
    return () => async dispatch => {
        dispatch(getPostsAsync.request(null, null));
        try {
            const payload = await getPosts();
            dispatch(getPostsAsync.success(payload));
        } catch(e) {
            dispatch(getPostsAsync.failure(e));
        }
    }
};

export const getPostThunk = () => {
    return (param) => async dispatch => {
        dispatch(getPostAsync.request(null, null));
        try {
            const payload = await getPostById(param);
            dispatch(getPostAsync.success(payload));
        } catch(e) {
            dispatch(getPostsAsync.failure(e));
        }
    }
};