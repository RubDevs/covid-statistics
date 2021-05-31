// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import const of the actions
import { 
  START_LOGIN, 
  SUCCESS_LOGIN, 
  ERROR_LOGIN,
  START_REGISTER,
  SUCCESS_REGISTER,
  ERROR_REGISTER,
} from '../../redux/consts';

// Import fetch API function
import apiCall from '../api';

// BaseURL
const baseURL = `https://master-covid-statistics.herokuapp.com/user`;

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

// Do api request with Saga
export function * registerRequest({ payload }) {
  const { data } = payload;
  
  // Do request
  try {
    const result = yield call(apiCall, `${baseURL}/register`, 'POST', JSON.stringify(data));
    yield put({ type: SUCCESS_REGISTER, result });
  } catch(error) {
    yield put({ type: ERROR_REGISTER, error });
  }
}

// Create watchers
export default function * authSaga() {
  yield takeLatest(START_LOGIN, loginRequest);
  yield takeLatest(START_REGISTER, registerRequest);
}