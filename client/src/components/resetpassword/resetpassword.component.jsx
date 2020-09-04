import React, { Fragment, useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changePassword } from '../../redux/forgotpassword/forgotpassword.action';
import { setAlert } from '../../redux/alert/alert.action';

import { Container } from '../forgotpassword/style';
import { FormControl } from '../../pages/auth/auth-style';

const ResetPassword = ({ match, setAlert, changePassword }) => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const { token } = match.params;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setAlert('Password does not match', 'danger');
    } else {
      changePassword({ token, password });
      return <Redirect to='/login' />;
    }
  };

  return (
    <Fragment>
      <Container>
        <form onSubmit={onSubmit}>
          <h2>Reset Password</h2>
          <FormControl>
            <input
              type='password'
              name='password'
              value={password}
              placeholder='Password'
              minLength='6'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <input
              type='password'
              name='confirmpassword'
              value={confirmpassword}
              placeholder='Confirm Password'
              required
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </FormControl>
          <input type='submit' value='Submit' />
        </form>
      </Container>
    </Fragment>
  );
};

ResetPassword.propTypes = {
  changePassword: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  changePassword: (token, password) =>
    dispatch(changePassword(token, password)),
  setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType)),
});

export default connect(null, mapDispatchToProps)(withRouter(ResetPassword));
