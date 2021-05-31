// Import const
import { 
  START_LOGIN, 
  SUCCESS_LOGIN, 
  ERROR_LOGIN,
  START_REGISTER,
  SUCCESS_REGISTER,
  ERROR_REGISTER,
  SUCCESS_GOOGLE_LOGIN,
  ERROR_GOOGLE_LOGIN,
  RESPONSE_FACEBOOK_LOGIN,
  LOGOUT
} from '../consts';

//Initialize state
const initialState = {
  successRequest: false,
  errorRequest: false,
  messageError: '',
  token: window.localStorage.getItem('Covid-Statistics-Token')
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
    case START_REGISTER:
      return { 
        ...state, 
        data: action.payload,
        successRequest: false,
        errorRequest: false,
      };
    case SUCCESS_REGISTER:
      return { 
        ...state, 
        successRequest: true,
      };
    case ERROR_REGISTER:
      console.log(action.error);
      return { 
        ...state, 
        errorRequest: true,
        messageError: action.error 
      };
    case SUCCESS_GOOGLE_LOGIN:
      const { accessToken: accessTokenGoogle  } = action.payload;
      window.localStorage.setItem('Covid-Statistics-Token', accessTokenGoogle);
      return { 
        ...state, 
        successRequest: true,
        token: accessTokenGoogle
      };
    case ERROR_GOOGLE_LOGIN:
      return { 
        ...state, 
        errorRequest: true,
        messageError: 'Login with Google failed'
      };
    case RESPONSE_FACEBOOK_LOGIN:
      const { accessToken: accessTokenFacebook } = action.payload;
      if (accessTokenFacebook) {
        window.localStorage.setItem('Covid-Statistics-Token', accessTokenFacebook);
        return { 
          ...state,
          successRequest: true,
          token: accessTokenFacebook
        };
      } else {
        return { 
          ...state,
          errorRequest: true,
          messageError: 'Login with Facebook failed' 
        };
      }
    case LOGOUT:
      window.localStorage.removeItem('Covid-Statistics-Token');
      return { 
        ...state,
        successRequest: true,
        token: null
      };
    default:
      return { ...state };
  }
}

export default authReducer;