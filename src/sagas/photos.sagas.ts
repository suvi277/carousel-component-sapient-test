import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getPhotosSuccess,
  getPhotosFailure,
} from '../actions/photos/photos.action';
import { API_ROOT, params } from '../constants/endpoint';
import { actions } from '../constants/action.types';

function getPhotos() {
  return axios.get(API_ROOT, { params });
}

function* getPhotosSaga() {
  try {
    const response = yield call(getPhotos);
    yield put(getPhotosSuccess(response.data.hits));
  } catch (error) {
    yield put(getPhotosFailure(error));
  }
}

export default function* photosSagas() {
  yield takeEvery(actions.PHOTOS.GET, getPhotosSaga);
}
