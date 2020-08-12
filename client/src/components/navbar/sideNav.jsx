import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { clearCommodity } from '../../redux/commodity/commodity.action';
import { SideNav } from './style';

const Navbar = ({ user: { isAuthenticated }, clearCommodity }) => (
  <SideNav>
    <ul>
      <li>
        <NavLink
          to='/'
          activeClassName='current'
          exact
          onClick={clearCommodity}
        >
          Market
        </NavLink>
      </li>
      {isAuthenticated && (
        <Fragment>
          <li>
            <NavLink to='/stall' activeClassName='current' exact>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile' activeClassName='current' exact>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to='/wallet' activeClassName='current' exact>
              Wallet
            </NavLink>
          </li>
        </Fragment>
      )}
      <li>
        <NavLink to='/help' activeClassName='current' exact>
          Support
        </NavLink>
      </li>
    </ul>
  </SideNav>
);

Navbar.propTypes = {
  user: PropTypes.object,
  clearCommodity: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { clearCommodity })(Navbar);
