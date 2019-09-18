import { GET_PACKS, SET_ALERT, REMOVE_ALERT } from './types';
import { airpackAPI } from '../../config/baseUrl';
import { setAlert } from './alert';

export const getPacks = () => async dispatch => {
  try {
    const res = await airpackAPI.get('/packs?limit=4');
    dispatch({
      type: GET_PACKS,
      payload: res.data.data.packs
    });
  } catch (error) {
    dispatch({
      type: SET_ALERT,
      payload: { message: error }
    });

    //setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 1000);
  }
};
