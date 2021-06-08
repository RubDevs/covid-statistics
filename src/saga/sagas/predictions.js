// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import const of the actions
import { 
  START_GET_DEATH_PREDICTIONS,
  SUCCESS_GET_DEATH_PREDICTIONS,
  ERROR_GET_DEATH_PREDICTIONS
} from '../../redux/consts';

// Import fetch API function
import apiCall from '../api';

// BaseURL
const baseURL = `https://week5backendprojections.herokuapp.com`;

// Do api request with Saga
export function * getDeathPredictionsRequest({ payload }) {
  const { countryName, days } = payload;
  
  // Do request
  try {
    const result = yield call(apiCall, `${baseURL}/getPredictions/${countryName}/{month_in_days}?days=${days}`, 'GET');
    yield put({ type: SUCCESS_GET_DEATH_PREDICTIONS, result });
  } catch(error) {
    yield put({ type: ERROR_GET_DEATH_PREDICTIONS, error });
  }
}

// Create watchers
export default function * predictionsSaga() {
  yield takeLatest(START_GET_DEATH_PREDICTIONS, getDeathPredictionsRequest);
}