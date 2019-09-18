import { GET_PACKS } from './types';
import axios from 'axios';

export const getPacks = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/v1/packs?limit=1');
    dispatch({
      type: GET_PACKS,
      payload: res.data.data.packs
    });
  } catch (error) {}
};
