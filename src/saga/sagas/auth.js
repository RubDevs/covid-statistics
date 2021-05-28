// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import const of the actions
import { 
  START_LOGIN, 
  SUCCESS_LOGIN, 
  ERROR_LOGIN,
} from '../../redux/consts';

// Import fetch API function
import apiCall from '../api';

// BaseURL
const baseURL = `https://futuramaapi.herokuapp.com/api/v2`;

// Do api request with Saga
export function * loginRequest({ payload }) {
  const { data } = payload;
  
  // Do request
  try {
    const result = yield call(apiCall, `${baseURL}/login`, 'POST', JSON.stringify(data));
    yield put({ type: SUCCESS_LOGIN, result });
  } catch(error) {
    yield put({ type: ERROR_LOGIN, error });
  }
}

// Create watchers
export default function * authSaga() {
  yield takeLatest(START_LOGIN, loginRequest);
}