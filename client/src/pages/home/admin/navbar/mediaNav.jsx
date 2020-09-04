import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logout } from '../../../../redux/admin/admin.action';

import { toggleNav } from '../../../../components/js/main';

const MediaNav = ({ logout }) => {
  return (
    <nav className='sm-hide'>
      <i
        id='toggle'
        className='fas fa-bars fa-2x nav-toggler'
        onClick={toggleNav}
      ></i>
      <div className='site-navbar'>
        <ul>
          <li>
            <h4>Welcome, Admin</h4>
          </li>

          <li>
            <Link to='/admin/upload'>Upload Commodity</Link>
          </li>
          <li>
            <Link to='/admin/commodities'>All Commodity</Link>
          </li>
          <li>
            <Link to='/admin/users'>All Users</Link>
          </li>
          <li>
            <Link to='/admin/investors'>All Investors</Link>
          </li>
          <li>
            <Link to='/admin/payments'>Payments</Link>
          </li>
          <li>
            <button to='#!' onClick={logout}>
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

MediaNav.propTypes = {
  logout: PropTypes.func,
};

export default connect(null, { logout })(MediaNav);
