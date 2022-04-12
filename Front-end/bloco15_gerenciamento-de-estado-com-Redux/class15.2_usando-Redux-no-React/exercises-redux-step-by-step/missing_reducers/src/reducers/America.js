import { AMERICA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

function americaContinent(state = INITIAL_STATE, action) {
  switch(action.type) {
    case AMERICA_ENERGY:
      return { state: action.state };
    default:
      return state;
  }
}

export default americaContinent;
