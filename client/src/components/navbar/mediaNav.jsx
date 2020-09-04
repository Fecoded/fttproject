import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { logout } from '../../redux/user/user.action';
import { clearCommodity } from '../../redux/commodity/commodity.action';

import { toggleNav } from '../js/main';

const MediaNav = ({
  user: { isAuthenticated, user },
  logout,
  cartItems,
  clearCommodity,
}) => {
  return (
    <nav className='sm-hide'>
      <i
        id='toggle'
        className='fas fa-bars fa-2x nav-toggler'
        onClick={toggleNav}
      ></i>
      <div className='site-navbar'>
        {isAuthenticated ? (
          <ul>
            <li>
              <h4>Hi {user && user.first_name}</h4>
            </li>
            <li>
              <Link to='/cart'>
                <div id='ex3'>
                  <span className='fa-stack' data-count={cartItems.length}>
                    <i className='fas fa-circle fa-shopping-cart'></i>
                  </span>
                </div>
              </Link>
            </li>
            <Fragment>
              <li>
                <Link to='/' onClick={clearCommodity}>
                  Market
                </Link>
              </li>
              <li>
                <Link to='/stall'>My Investment</Link>
              </li>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <Link to='/wallet'>Wallet</Link>
              </li>
              <li>
                <Link to='/support'>Support</Link>
              </li>
            </Fragment>
            <li>
              <button to='#!' onClick={logout}>
                LOGOUT
              </button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to='/' onClick={clearCommodity}>
                Market
              </Link>
            </li>
            <li>
              <Link to='/support'>Support</Link>
            </li>

            <li>
              <Link to='/login'>
                <button>LOGIN</button>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <button>SIGN UP</button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

MediaNav.propTypes = {
  user: PropTypes.object,
  cartItems: PropTypes.array,
  clearCommodity: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, { logout, clearCommodity })(MediaNav);
