import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import MediaNav from './mediaNav';

import { CustomNavbar, CustomBackground, Nav } from './style';
import CustomContainer from '../container';
import logo from '../../assets/logo.jpg';

import { logout, loadUser } from '../../redux/user/user.action';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const Navbar = ({
  logout,
  user: { isAuthenticated, user, token },
  loadUser,
  cartItems,
}) => {
  useEffect(() => {
    if (token !== null) {
      loadUser();
    }
  }, [loadUser, token]);

  return (
    <CustomBackground>
      <CustomContainer>
        <CustomNavbar>
          <img src={logo} alt='logo' className='logo' />
          <Nav>
            {isAuthenticated ? (
              <ul>
                <li>
                  <Link to='/cart'>
                    <div id='ex3'>
                      <span className='fa-stack' data-count={cartItems.length}>
                        <i className='fas fa-circle fa-shopping-cart'></i>
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <h4>Hi {user && user.first_name}</h4>
                </li>
                <li>
                  <Link to='#!' className='logout' onClick={logout}>
                    LOGOUT
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to='/login' className='logout'>
                    LOGIN
                  </Link>
                </li>
                <li>
                  <Link to='/register' className='logout'>
                    SIGN UP
                  </Link>
                </li>
              </ul>
            )}
          </Nav>
          <MediaNav />
        </CustomNavbar>
      </CustomContainer>
    </CustomBackground>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  loadUser: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
