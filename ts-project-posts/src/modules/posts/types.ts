import { ActionType } from 'typesafe-actions';
import { PostProps } from '../../api/post';

export type PostActions = ActionType<typeof import('./actions')>;

export type PostState = {
    posts: {
        loading: boolean,
        data: null | PostProps[],
        error: boolean,
    }
    post: {
        loading: boolean,
        data: null | PostProps,
        error: boolean,
    }
};