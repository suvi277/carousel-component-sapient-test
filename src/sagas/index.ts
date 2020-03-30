import { all, fork } from 'redux-saga/effects';
import photosSagas from './photos.sagas';

export const rootSaga = function* root() {
    yield all([fork(photosSagas)]);
};
