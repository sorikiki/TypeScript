import { createReducer } from 'typesafe-actions';
import { PostState } from './types';
import * as actions from './actions';

const initialState : PostState = {
    posts: {
        loading: false,
        data: null,
        error: false,
    },
    post: {
        loading: false,
        data: null,
        error: false,
    }
};

const postReducer = createReducer(initialState, {
    [actions.GET_POSTS_REQUEST] : state => ({
        ...state,
        posts: {
            loading: true,
            data: null,
            error: false,
        }
    }),
    [actions.GET_POSTS_SUCCESS] : (state, action) => ({
        ...state,
        posts: {
            loading: false,
            data: action.payload,
            error: false,
        }
    }),
    [actions.GET_POST_ERROR] : (state) => ({
        ...state,
        posts: {
            loading: false,
            data: null,
            error: true,
        }
    }),
    [actions.GET_POST_REQUEST] : (state) => ({
        ...state,
        post: {
            loading: true,
            data: null,
            error: false,
        }
    }),
    [actions.GET_POST_SUCCESS]: (state, action) => ({
        ...state,
        post: {
            loading: false,
            data: action.payload,
            error: false,
        }
    }),
    [actions.GET_POST_ERROR]: (state) => ({
        ...state,
        post: {
            loading: false,
            data: null,
            error: true,
        }
    })
});

export default postReducer;