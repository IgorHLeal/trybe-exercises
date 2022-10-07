import { ASIA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

function asiaContinent(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ASIA_ENERGY:
      return { state: action.state };
    default:
      return state;
  }
}

export default asiaContinent;
