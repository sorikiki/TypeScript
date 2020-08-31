import { createReducer } from 'typesafe-actions';
import { PostState, PostActions } from './types';
import * as actions from './actions';
import reducerUtils from '../../lib/reduerUtils';

const initialState : PostState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial(),
};

const postReducer = createReducer<PostState, PostActions>(initialState, {
    [actions.GET_POSTS_REQUEST] : (state, action) => ({
        ...state,
        posts: reducerUtils.posts_request(action.payload),
    }),
    [actions.GET_POSTS_SUCCESS] : (state, action) => ({
        ...state,
        posts: reducerUtils.success(action.payload),
    }),
    [actions.GET_POST_ERROR] : (state) => ({
        ...state,
        posts: reducerUtils.error(),
    }),
    [actions.GET_POST_REQUEST] : (state) => ({
        ...state,
        post: reducerUtils.post_request(),
    }),
    [actions.GET_POST_SUCCESS]: (state, action) => ({
        ...state,
        post: reducerUtils.success(action.payload),
    }),
    [actions.GET_POST_ERROR]: (state) => ({
        ...state,
        post: reducerUtils.error(),
    })
});

export default postReducer;