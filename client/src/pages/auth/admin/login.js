import React, { useState } from 'react';
import { connect } from 'react-redux';

import { FormInput } from '../../../components/inputField/inputField';
import { Form } from '../../../components/form/form-style';
import { Button } from '../../../components/button';
import { Container, CustomCard, FormControl } from '../auth-style';

import { login } from '../../../redux/admin/admin.action';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <Container>
      <CustomCard>
        <Form onSubmit={onSubmit}>
          <h1>ADMIN LOGIN</h1>
          <FormControl>
            <FormInput
              type='email'
              name='email'
              value={email}
              placeholder='Email Address'
              handleChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormInput
              type='password'
              name='password'
              value={password}
              placeholder='Password'
              handleChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button>Login</Button>
        </Form>
      </CustomCard>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (formData) => dispatch(login(formData)),
});

export default connect(null, mapDispatchToProps)(Login);
