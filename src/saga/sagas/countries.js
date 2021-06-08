// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import const of the actions
import { 
  START_GET_COUNTRIES,
  SUCCESS_GET_COUNTRIES,
  ERROR_GET_COUNTRIES
} from '../../redux/consts';

// Import fetch API function
import apiCall from '../api';

// BaseURL
const baseURL = `https://week5backendprojections.herokuapp.com`;

// Do api request with Saga
export function * getCountriesRequest() {
  // Do request
  try {
    const result = yield call(apiCall, `${baseURL}/getAllCountries`, 'GET');
    yield put({ type: SUCCESS_GET_COUNTRIES, result });
  } catch(error) {
    yield put({ type: ERROR_GET_COUNTRIES, error });
  }
}

// Create watchers
export default function * countriesSaga() {
  yield takeLatest(START_GET_COUNTRIES, getCountriesRequest);
}