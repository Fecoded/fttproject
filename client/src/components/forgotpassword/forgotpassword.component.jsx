import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { checkEmail } from '../../redux/forgotpassword/forgotpassword.action';

import { Container } from './style';
import { FormControl } from '../../pages/auth/auth-style';

const ForgotPassword = ({ checkEmail }) => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    checkEmail({ email });
    setEmail('');
  };

  return (
    <Fragment>
      <Container>
        <form onSubmit={onSubmit}>
          <h2>Forgot Password</h2>
          <FormControl>
            <input
              type='text'
              name='email'
              value={email}
              placeholder='Email Address'
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <input type='submit' value='Submit' />
        </form>
      </Container>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkEmail: (email) => dispatch(checkEmail(email)),
});

export default connect(null, mapDispatchToProps)(ForgotPassword);
