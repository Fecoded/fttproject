import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/admin/admin.selectors';

const PrivateRouteAdmin = ({
  component: Component,
  admin: { isAuthenticated, token },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && token === null ? (
        <Redirect to='/admin/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRouteAdmin.propTypes = {
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  admin: selectCurrentUser,
});

export default connect(mapStateToProps)(PrivateRouteAdmin);
