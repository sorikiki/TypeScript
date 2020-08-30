import { createReducer } from 'typesafe-actions';
import { PostState } from './types';
import * as actions from './actions';
import reducerUtils from '../../lib/reduerUtils';

const initialState : PostState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial(),
};

const postReducer = createReducer(initialState, {
    [actions.GET_POSTS_REQUEST] : state => ({
        ...state,
        posts: reducerUtils.request(),
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
        post: reducerUtils.request(),
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