import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as postAPI from '../api/post';
import { postProps } from '../api/post';
import { RootState } from './index';

/* actions */
const GET_POSTS = 'GET_POSTS' as const;
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' as const;
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' as const;

const GET_POST = 'GET_POST' as const;
const GET_POST_SUCCESS = 'GET_POST_SUCCESS' as const;
const GET_POST_ERROR = 'GET_POST_ERROR' as const;

/* action creators */
const getPosts = () => {
    return (): ThunkAction<Promise<void>, RootState, null, Action<string>> => async dispatch => {
    dispatch({ type: GET_POSTS });
    try {
        const payload = postAPI.getPosts();
        dispatch({ type: GET_POSTS_SUCCESS, payload });
    } catch(e) {
        dispatch({ type: GET_POSTS_ERROR, payload: e, error: true })
    }
    };
};

const getPostById = () => {
    return (param) => async dispatch => {
    dispatch({ type: GET_POST });
    try {
        const payload = postAPI.getPostById(param);
        dispatch({ type: GET_POST_SUCCESS, payload: param });
    } catch(e) {
        dispatch({ type: GET_POST_ERROR, payload: e, error: true})
    }
    };
};

type PostStateProps = {
    loading: boolean,
    data: null | postProps[],
    error: boolean,
};

type PostState = {
    posts: null | PostStateProps;
    post: null | PostStateProps;
}

const initialState: PostState = {
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

const postReducer = (state: PostState = initialState, action) => {
    switch(action.type) {

    }
}

export default postReducer;