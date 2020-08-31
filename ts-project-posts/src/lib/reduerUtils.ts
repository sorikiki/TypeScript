import { PostProps } from '../api/post';

const reducerUtils = ({
    initial: () => ({
        loading: false,
        data: null,
        error: false,
    }),
    posts_request: (posts : PostProps[] | null) => ({
        loading: true,
        data: posts,
        error: false,
    }),
    post_request: () => ({
        loading: true,
        data: null,
        error: false,
    }),
    success: (data: any) => ({
        loading: false,
        data,
        error: false,
    }),
    error: () => ({
        loading: false,
        data: null,
        error: true,
    }),
})

export default reducerUtils;