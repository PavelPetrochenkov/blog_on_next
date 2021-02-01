import axios from 'axios';
import { setAllPosts, errorPosts } from './actions/postsAction';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function fetchPosts() {
    return axios({
        method: 'get',
        url: 'https://simple-blog-api.crew.red/posts',
    });
}

function* getAllPostsAsync() {
    try {
        const res = yield call(fetchPosts);
        const response = res.data;
        const reversed = response.reverse();
        yield put(setAllPosts(reversed));
    } catch (error) {
        yield put(errorPosts());
    }
}

function* watchGetAllPostsAsync() {
    yield takeEvery('GET_POSTS', getAllPostsAsync);
}

sagaMiddleware.run(watchGetAllPostsAsync);

export default store;
