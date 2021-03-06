import { GET_PACKS, SET_ALERT, REMOVE_ALERT } from './types';
import { airpackAPI } from '../../config/baseUrl';
import { setAlert } from './alert';

export const getPacks = (limit = 4) => async dispatch => {
  try {
    const res = await airpackAPI.get(`/packs?limit=${limit}`);

    dispatch({
      type: GET_PACKS,
      payload: res.data.data.data
    });
  } catch (error) {
    dispatch({
      type: SET_ALERT,
      payload: { message: error }
    });

    //setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 1000);
  }
};
