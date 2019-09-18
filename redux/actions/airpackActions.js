import { GET_PACKS } from './types';
import { airpackAPI } from '../../config/baseUrl';

export const getPacks = () => async dispatch => {
  try {
    const res = await airpackAPI.get('/packs?limit=4');
    dispatch({
      type: GET_PACKS,
      payload: res.data.data.packs
    });
  } catch (error) {}
};
