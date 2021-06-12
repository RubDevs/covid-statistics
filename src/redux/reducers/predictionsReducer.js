// Import const
import { 
  START_GET_DEATH_PREDICTIONS,
  SUCCESS_GET_DEATH_PREDICTIONS,
  ERROR_GET_DEATH_PREDICTIONS
} from '../consts';

//Initialize state
const initialState = {
  deathData: [],
  loadingDeathData: false,
  messgaeError: ''
};

//Create reducers
const predictionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_DEATH_PREDICTIONS:
      return { 
        ...state, 
        data: action.payload,
        deathData: [],
        loadingDeathData: true,
        messgaeError: ''
      };
    case SUCCESS_GET_DEATH_PREDICTIONS:
      const { data } = JSON.parse(action.result);
      console.log(data);
      return { 
        ...state, 
        loadingDeathData: false,
        deathData: data
      };
    case ERROR_GET_DEATH_PREDICTIONS:
      return { 
        ...state, 
        messgaeError: action.error.message,
        loadingDeathData: false,
      };
    default:
      return { ...state };
  }
}

export default predictionsReducer;