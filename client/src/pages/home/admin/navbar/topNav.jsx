import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MediaNav from './mediaNav';

import { CustomNavbar, CustomBackground, Nav } from './style';
import CustomContainer from '../../../../components/container';
import logo from '../../../../assets/logo.jpg';

import { logout, loadAdmin } from '../../../../redux/admin/admin.action';

const Navbar = ({ logout, loadAdmin }) => {
  useEffect(() => {
    loadAdmin();
  }, [loadAdmin]);

  return (
    <CustomBackground>
      <CustomContainer>
        <CustomNavbar>
          <img src={logo} alt='logo' className='logo' />
          <Nav>
            <ul>
              <li>
                <h4>Welcome, Admin</h4>
              </li>
              <li>
                <Link to='#!' onClick={logout} className='logout'>
                  LOGOUT
                </Link>
              </li>
            </ul>
          </Nav>
          <MediaNav />
        </CustomNavbar>
      </CustomContainer>
    </CustomBackground>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func,
  loadAdmin: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  loadAdmin: () => dispatch(loadAdmin()),
});

export default connect(null, mapDispatchToProps)(Navbar);
