import { createAsyncAction } from 'typesafe-actions';
import{ PostProps } from '../../api/post';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPostsAsync = createAsyncAction(
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
)<undefined, PostProps[], Error>();

export const getPostAsync = createAsyncAction(
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_ERROR,
)<undefined, PostProps, Error>();