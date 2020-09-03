import { ActionType } from 'typesafe-actions';
import { PostProps } from '../../api/post';
import * as actions from './actions';

export type PostActions = ActionType<typeof actions>;
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

declare module 'typesafe-actions' {
    interface Types {
        PostState: PostState,
        PostActions: PostActions;
      }
    }