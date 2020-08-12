import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { login } from '../../../redux/user/user.action';
import { selectCurrentUser } from '../../../redux/user/user.selector';

import { FormInput } from '../../../components/inputField/inputField';
import { Form } from '../../../components/form/form-style';
import { Button } from '../../../components/button';
import {
  Container,
  Card,
  ImageContainer,
  Image,
  FormControl,
  CheckBoxContainer,
  CustomLink,
} from '../auth-style';

// Styles
import img from '../../../assets/farmer.jpg';

const Login = ({ login, user: { isAuthenticated } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Container>
      <Card>
        <Form onSubmit={onSubmit}>
          <h1>LOG IN</h1>
          <FormControl>
            <FormInput
              type='email'
              name='email'
              value={email}
              placeholder='Email Address'
              required
              handleChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormInput
              type='password'
              name='password'
              value={password}
              placeholder='Password'
              required
              handleChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <CheckBoxContainer>
            <label className='checkboxContainer'>
              <input type='checkbox' />
              <span className='cb'>Remember me</span>
            </label>

            <CustomLink to='/forgotpassword'>Forgot Password</CustomLink>
          </CheckBoxContainer>

          <Button>Login</Button>

          <small>
            Don't have an account?{' '}
            <CustomLink to='/register'>Sign Up</CustomLink>
          </small>
        </Form>
        <ImageContainer>
          <Image src={img} />
        </ImageContainer>
      </Card>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { login })(Login);
