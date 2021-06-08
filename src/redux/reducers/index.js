// Import libraries
import { combineReducers } from 'redux';

// Import reducers
import authReducer from './authReducer';
import predictionsReducer from './predictionsReducer';
import countriesReducer from './countriesReducer';

// Add reducers to root
const rootReducer = combineReducers({
	authReducer,
	predictionsReducer,
	countriesReducer
});

export default rootReducer;