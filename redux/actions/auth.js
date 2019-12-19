import { airpackAPI } from '../../config/baseUrl';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  UPDATE_USER,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';
import setAuthToken from '../../utils/setAuthToken';

export const loadUser = ctx => async dispatch => {
  let token;

  if (process.browser) {
    token = cookie.get('token');
  } else {
    token = nextCookies(ctx).token;
  }

  try {
    const res = await airpackAPI.get('/users/current', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({
  name,
  email,
  password,
  passwordConfirm
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password, passwordConfirm });

  try {
    const res = await airpackAPI.post('/users/signup', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    // dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await airpackAPI.post(`/users/login`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    //  dispatch(loadUser());
  } catch (err) {
    const error = err.response.data.message;
    if (error) {
      dispatch(setAlert(error, 'danger'));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const updateUser = payload => async dispatch => {
  dispatch({ type: UPDATE_USER, payload });
};

// Logout / Clear Profile
export const logout = () => async dispatch => {
  dispatch({ type: LOGOUT });
};
