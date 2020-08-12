import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getInvestor, getProfile } from '../../redux/investor/investor.action';

const UserItem = ({ user, getInvestor, getProfile, history }) => {
  const investorDetail = () => {
    getInvestor(user);
    getProfile(user._id);
    history.push('/admin/user');
  };

  return (
    <tr className='priority-200'>
      <td data-label='First Name'>{user.first_name}</td>
      <td data-label='Last Name'>{user.last_name}</td>
      <td data-label='Email '>{user.email}</td>
      <td data-label='Phone Number'>{user.phone}</td>
      <td className='edit' onClick={investorDetail}>
        <i className='fa fa-eye'></i>
      </td>
    </tr>
  );
};

UserItem.propTypes = {
  user: PropTypes.object,
  getInvestor: PropTypes.func,
  getProfile: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getInvestor: (investor) => dispatch(getInvestor(investor)),
  getProfile: (id) => dispatch(getProfile(id)),
});

export default connect(null, mapDispatchToProps)(withRouter(UserItem));
