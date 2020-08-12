import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

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
  FormUsername,
} from '../auth-style';
import { selectCurrentUser } from '../../../redux/user/user.selector';
import { register } from '../../../redux/user/user.action';
import { setAlert } from '../../../redux/alert/alert.action';

// Styles
import img from '../../../assets/farmer.jpg';

const Register = ({ register, setAlert, user: { isAuthenticated } }) => {
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setAlert('Password do not match', 'error');
    } else {
      register({
        first_name,
        last_name,
        email,
        phone,
        password,
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Container>
      <Card>
        <Form onSubmit={onSubmit}>
          <h1>REGISTER</h1>
          <FormUsername>
            <FormControl>
              <input
                type='text'
                name='first_name'
                value={first_name}
                placeholder='First Name'
                required
                onChange={(e) => setFirstname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <input
                type='text'
                name='last_name'
                value={last_name}
                placeholder='Last Name'
                required
                onChange={(e) => setLastname(e.target.value)}
              />
            </FormControl>
          </FormUsername>

          <FormControl>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='Email Address'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <input
              type='number'
              name='phone'
              value={phone}
              placeholder='Phone Number'
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <input
              type='password'
              name='password'
              value={password}
              placeholder='Password'
              required
              minLength='6'
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
              minLength='6'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          <CheckBoxContainer>
            <div>
              <label>
                <input type='checkbox' className='filled-in' required />
                <span>
                  Please agree to
                  <CustomLink to='/termsandconditions'> terms</CustomLink> to
                  register
                </span>
              </label>
            </div>
          </CheckBoxContainer>

          <Button>Register</Button>

          <small>
            Already Registered? <CustomLink to='/login'>Sign In</CustomLink>
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

export default connect(mapStateToProps, { register, setAlert })(Register);
