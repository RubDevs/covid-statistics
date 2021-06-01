// Import libraries
import { combineReducers } from 'redux';

// Import reducers
import authReducer from './authReducer';

// Add reducers to root
const rootReducer = combineReducers({
	authReducer
});

export default rootReducer;