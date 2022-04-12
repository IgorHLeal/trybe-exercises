import { EUROPE_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

function europeContinent(state = INITIAL_STATE, action) {
  switch(action.type) {
    case EUROPE_ENERGY:
      return { state: action.state };
    default:
      return state;
  }
}

export default europeContinent;
