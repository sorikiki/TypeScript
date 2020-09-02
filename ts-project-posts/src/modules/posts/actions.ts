import { createAsyncAction } from 'typesafe-actions';
import{ PostProps } from '../../api/post';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const GET_POST = 'GET_POST' as const;
export const postCreator = (id: number) => ({
    type: GET_POST,
    payload: id,
});

export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPostsAsync = createAsyncAction(
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
)<null | PostProps[], PostProps[], Error>();

export const getPostAsync = createAsyncAction(
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_ERROR,
)<null, PostProps, Error>();
