// Import const
import { 
  START_GET_COUNTRIES,
  SUCCESS_GET_COUNTRIES,
  ERROR_GET_COUNTRIES
} from '../consts';

//Initialize state
const initialState = {
  countries: [],
  loadingCountries: false,
  messgaeError: ''
};

//Create reducers
const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_COUNTRIES:
      return { 
        ...state, 
        data: action.payload,
        countries: [],
        loadingCountries: true,
        messgaeError: ''
      };
    case SUCCESS_GET_COUNTRIES:
      return { 
        ...state, 
        loadingCountries: false,
        countries: action.result
      };
    case ERROR_GET_COUNTRIES:
      return { 
        ...state, 
        messgaeError: action.error.message,
        loadingCountries: false
      };
    default:
      return { ...state };
  }
}

export default countriesReducer;