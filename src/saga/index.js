// Import libraries
import { all } from 'redux-saga/effects';

// Import sagas
import authSaga from './sagas/auth';
import predictionsSaga from './sagas/predictions';
import countriesSaga from './sagas/countries';

// Add watchers
export default function * rootSaga() {
  yield all([
    authSaga(),
    predictionsSaga(),
    countriesSaga()
  ]);
}