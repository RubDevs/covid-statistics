// Import const
import { 
  START_LOGIN, 
  SUCCESS_LOGIN, 
  ERROR_LOGIN,
  SUCCESS_GOOGLE_LOGIN,
  ERROR_GOOGLE_LOGIN,
  RESPONSE_FACEBOOK_LOGIN
} from '../consts';

//Initialize state
const initialState = {
  successRequest: false,
  errorRequest: false,
  messageError: ''
};

//Create reducers
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return { 
        ...state, 
        data: action.payload,
        successRequest: false,
        errorRequest: false,
      };
    case SUCCESS_LOGIN:
      return { 
        ...state, 
        successRequest: true,
      };
    case ERROR_LOGIN:
      console.log(action.error);
      return { 
        ...state, 
        errorRequest: true,
        messageError: action.error 
      };
    case SUCCESS_GOOGLE_LOGIN:
      console.log(action.payload);
      return { 
        ...state, 
        successRequest: true
      };
    case ERROR_GOOGLE_LOGIN:
      console.log(action.payload);
      return { 
        ...state, 
        errorRequest: true 
      };
    case RESPONSE_FACEBOOK_LOGIN:
      console.log(action.payload);
      return { 
        ...state 
      };
    default:
      return { ...state };
  }
}

export default authReducer;