import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  getInvestor,
  getInvestorStalls,
} from '../../redux/investor/investor.action';

const InvestorItem = ({
  user,
  walletItems,
  history,
  getInvestor,
  getInvestorStalls,
}) => {
  const investorDetail = () => {
    getInvestor(user);
    getInvestorStalls(user._id);
    history.push(`/admin/investor`);
  };

  return (
    <Fragment>
      {walletItems.map(
        (walletItem) =>
          walletItem.user === user._id && (
            <tr key={walletItem._id} className='priority-200'>
              <td data-label='First Name'>{user.first_name}</td>
              <td data-label='Last Name'>{user.last_name}</td>
              <td data-label='Email '>{user.email}</td>
              <td data-label='Phone Number'>{user.phone}</td>
              <td className='edit' onClick={investorDetail}>
                <i className='fa fa-eye'></i>
              </td>
            </tr>
          )
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getInvestor: (investor) => dispatch(getInvestor(investor)),
  getInvestorStalls: (id) => dispatch(getInvestorStalls(id)),
});

export default connect(null, mapDispatchToProps)(withRouter(InvestorItem));
