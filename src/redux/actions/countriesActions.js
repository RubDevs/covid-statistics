// Import const
import { 
  START_GET_COUNTRIES
} from '../consts';

export const getCountries = payload => ({
  type: START_GET_COUNTRIES,
  payload
});