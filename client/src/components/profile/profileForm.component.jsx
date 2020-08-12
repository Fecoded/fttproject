import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { Card, Form, FormWrapper } from './style';
import { FormControl } from '../../pages/auth/auth-style';
import { createProfile, getProfile } from '../../redux/profile/profile.action';
import { selectUserProfile } from '../../redux/profile/profile.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { alertScroll } from '../js/main';

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getProfile,
  user: { user },
}) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    user_email: '',
    user_phone: '',
    date_of_birth: '',
    gender: '',
    bank: '',
    account_name: '',
    account_number: '',
    bvn: '',
    name: '',
    relationship: '',
    email: '',
    phone: '',
    nok_gender: '',
  });

  useEffect(() => {
    getProfile();
    setFormData({
      first_name: !user ? '' : user.first_name,
      last_name: !user ? '' : user.last_name,
      user_email: !user ? '' : user.email,
      user_phone: !user ? '' : user.phone,
      date_of_birth: loading || !profile ? '' : profile.date_of_birth,
      gender: loading || !profile ? '' : profile.gender,
      bank: loading || !profile ? '' : profile.bank,
      account_name: loading || !profile ? '' : profile.account_name,
      account_number: loading || !profile ? '' : profile.account_number,
      bvn: loading || !profile ? '' : profile.bvn,
      name: loading || !profile ? '' : profile.next_of_kin.name,
      relationship: loading || !profile ? '' : profile.next_of_kin.relationship,
      email: loading || !profile ? '' : profile.next_of_kin.email,
      phone: loading || !profile ? '' : profile.next_of_kin.phone,
      nok_gender: loading || !profile ? '' : profile.next_of_kin.nok_gender,
    });
    // eslint-disable-next-line
  }, [loading]);

  const {
    first_name,
    last_name,
    user_email,
    user_phone,
    date_of_birth,
    gender,
    bank,
    account_name,
    account_number,
    bvn,
    name,
    relationship,
    email,
    phone,
    nok_gender,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData);

    alertScroll();
  };

  return (
    <Card className='mt-1'>
      <Form onSubmit={onSubmit}>
        <FormWrapper>
          <FormControl>
            <label>Firstname</label>
            <input
              type='text'
              name='first_name'
              value={first_name}
              disabled
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>Lastname</label>
            <input
              type='text'
              name='last_name'
              value={last_name}
              disabled
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>Email Address</label>
            <input
              type='text'
              name='user_email'
              value={user_email}
              disabled
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>Phone Number</label>
            <input
              type='number'
              name='user_phone'
              value={user_phone}
              disabled
              onChange={onChange}
            />
          </FormControl>
        </FormWrapper>

        <FormWrapper>
          <FormControl>
            <label>Date of birth</label>
            <input
              type='date'
              name='date_of_birth'
              value={date_of_birth || ''}
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>Gender</label>
            <select name='gender' value={gender || ''} onChange={onChange}>
              <option>--Select--</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </FormControl>

          <FormControl>
            <label>Bank</label>
            <input
              type='text'
              name='bank'
              value={bank || ''}
              placeholder='Bank'
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>Account Name</label>
            <input
              type='text'
              name='account_name'
              value={account_name || ''}
              placeholder='Account Name'
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>Account Number</label>
            <input
              type='number'
              name='account_number'
              value={account_number || ''}
              placeholder='Account Number'
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>BVN</label>
            <input
              type='number'
              name='bvn'
              value={bvn || ''}
              placeholder='BVN'
              onChange={onChange}
            />
          </FormControl>
        </FormWrapper>

        <h4 className='mt-1'>Next of Kin</h4>

        <FormWrapper>
          <FormControl>
            <label>Name</label>
            <input
              type='text'
              name='name'
              value={name || ''}
              placeholder='Name'
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>Relationship</label>
            <input
              type='text'
              name='relationship'
              value={relationship || ''}
              placeholder='Relationship'
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={email || ''}
              placeholder='Email Address'
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>Phone Number</label>
            <input
              type='number'
              name='phone'
              value={phone || ''}
              placeholder='Phone Number'
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <label>Gender</label>
            <select
              name='nok_gender'
              value={nok_gender || ''}
              onChange={onChange}
            >
              <option>--Select--</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </FormControl>
        </FormWrapper>

        <input type='submit' value='Submit' className='mt-1' />
      </Form>
    </Card>
  );
};

ProfileForm.propTypes = {
  profile: PropTypes.object,
  user: PropTypes.object,
  createProfile: PropTypes.func,
  loadUser: PropTypes.func,
  getProfile: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  profile: selectUserProfile,
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  createProfile: (formData) => dispatch(createProfile(formData)),
  getProfile: () => dispatch(getProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
