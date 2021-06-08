// Import const
import { 
  START_GET_DEATH_PREDICTIONS
} from '../consts';

export const getDeathPredictions = payload => ({
  type: START_GET_DEATH_PREDICTIONS,
  payload
});