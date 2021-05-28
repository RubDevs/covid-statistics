// Import libraries
import { all } from 'redux-saga/effects';

// Import sagas
import authSaga from './sagas/auth';

// Add watchers
export default function * rootSaga() {
  yield all([
    authSaga()
  ]);
}