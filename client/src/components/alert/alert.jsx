import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentAlert } from '../../redux/alert/alert.selector';

import { Alert } from './style';

const index = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Alert key={alert.id} alert={alert.alertType}>
      <i className='fas fa-info-circle' /> {alert.msg}
    </Alert>
  ));

const mapStateToProps = createStructuredSelector({
  alerts: selectCurrentAlert,
});

export default connect(mapStateToProps)(index);
