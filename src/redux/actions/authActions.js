// Import const
import { 
  START_LOGIN, 
} from '../consts';

export const login = payload => ({
  type: START_LOGIN,
  payload
});