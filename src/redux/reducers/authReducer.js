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
      const { token: tokenLogin } = action.result;
      window.localStorage.setItem('Covid-Statistics-Token', `Bearer ${tokenLogin}`);
      return { 
        ...state, 
        successRequest: true,
        token: `Bearer ${tokenLogin}`
      };
    case ERROR_LOGIN:
      console.log(action.error);
      return { 
        ...state, 
        errorRequest: true,
        messageError: action.error.message 
      };
    case START_REGISTER:
      return { 
        ...state, 
        data: action.payload,
        successRequest: false,
        errorRequest: false,
      };
    case SUCCESS_REGISTER:
      const { token: tokenRegister } = action.result;
      window.localStorage.setItem('Covid-Statistics-Token', `Bearer ${tokenRegister}`);
      return { 
        ...state, 
        successRequest: true,
        token: `Bearer ${tokenRegister}`
      };
    case ERROR_REGISTER:
      console.log(action.error);
      return { 
        ...state, 
        errorRequest: true,
        messageError: action.error.message  
      };
    case SUCCESS_GOOGLE_LOGIN:
      const { tokenId: tokenIdGoogle  } = action.payload;
      window.localStorage.setItem('Covid-Statistics-Token', tokenIdGoogle);
      return { 
        ...state, 
        successRequest: true,
        token: tokenIdGoogle
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