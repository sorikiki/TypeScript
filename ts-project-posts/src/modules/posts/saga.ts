import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostById, getPosts } from '../../api/post';
import { getPostsAsync, getPostAsync, GET_POSTS, GET_POST, postsCreator, postCreator} from './actions';

export function* getPostsSaga(action: ReturnType<typeof postsCreator>) {
    yield put(getPostsAsync.request(action.payload));
    try {
        const payload = yield call(getPosts);
        yield put(getPostsAsync.success(payload));
    } catch(e) {
        yield put(getPostsAsync.failure(e));
    }
}
export function* getPostSaga(action: ReturnType<typeof postCreator>) {
    yield put(getPostAsync.request(null));
    try {
        const payload = yield call(getPostById, action.payload);
        yield put(getPostAsync.success(payload));
    } catch(e) {
        yield put(getPostAsync.failure(e));
    }
}

export function* PostSaga() {
    yield takeLatest(GET_POSTS, getPostsSaga);
    yield takeLatest(GET_POST, getPostSaga);
}