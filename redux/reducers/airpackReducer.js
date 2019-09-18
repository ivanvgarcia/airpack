import { GET_PACKS } from '../actions/types';

const INITIAL_STATE = {
  packs: null,
  pack: null,
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PACKS:
      return { ...state, packs: action.payload, loading: false };
    default:
      return state;
  }
};
