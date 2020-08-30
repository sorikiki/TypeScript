const reducerUtils = ({
    initial: () => ({
        loading: false,
        data: null,
        error: false,
    }),
    request: () => ({
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