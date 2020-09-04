import {
  PASSWORD_SUCCESS,
  CHANGE_PASSWORD,
  PASSWORD_ERROR,
} from './forgotpassword.types';
import axios from 'axios';
import { setAlert } from '../../redux/alert/alert.action';

// CHECK EMAIL AND SEND LINK
export const checkEmail = (email) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(`/api/forgotpassword`, email, config);

    dispatch({
      type: PASSWORD_SUCCESS,
      payload: res.data,
    });
    dispatch(
      setAlert('A Reset Link has been sent to your Email Address', 'success')
    );
  } catch (err) {
    dispatch({ type: PASSWORD_ERROR, payload: err.response.msg });
  }
};

// CHANGE PASSWORD
export const changePassword = ({ password, token }) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/forgotpassword/${token}`, { password });
    dispatch({ type: CHANGE_PASSWORD, payload: res.data });
    dispatch(setAlert('Password changed Successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.msg;
    dispatch({ type: PASSWORD_ERROR, payload: errors });
    dispatch(setAlert(errors, 'error'));
  }
};
