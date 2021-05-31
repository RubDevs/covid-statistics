// Import const
import { 
  START_LOGIN,
  START_REGISTER,
  SUCCESS_GOOGLE_LOGIN,
  ERROR_GOOGLE_LOGIN,
  RESPONSE_FACEBOOK_LOGIN,
  LOGOUT 
} from '../consts';

export const login = payload => ({
  type: START_LOGIN,
  payload
});

export const register = payload => ({
  type: START_REGISTER,
  payload
});

export const successGoogleLogin = payload => ({
  type: SUCCESS_GOOGLE_LOGIN,
  payload
});

export const errorGoogleLogin = payload => ({
  type: ERROR_GOOGLE_LOGIN,
  payload
});

export const responseFacebookLogin = payload => ({
  type: RESPONSE_FACEBOOK_LOGIN,
  payload
});

export const logout = payload => ({
  type: LOGOUT,
  payload
});