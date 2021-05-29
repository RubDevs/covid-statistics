// Import const
import { 
  START_LOGIN,
  SUCCESS_GOOGLE_LOGIN,
  ERROR_GOOGLE_LOGIN,
  RESPONSE_FACEBOOK_LOGIN 
} from '../consts';

export const login = payload => ({
  type: START_LOGIN,
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