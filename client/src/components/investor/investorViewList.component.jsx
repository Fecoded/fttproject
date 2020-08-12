import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Card, CustomTable } from './style';

import {
  selectCurrentInvestor,
  selectInvestorStalls,
} from '../../redux/investor/investor.selectors';
import InvestorViewItem from './investorViewItem';

const investorViewList = ({ investor, stalls }) => {
  return (
    <Card className='mt-1'>
      <div className='investor-details'>
        <h2>Profile</h2>
        <h3>Full Name: {`${investor.first_name} ${investor.last_name}`}</h3>
        <h3>Email Address: {investor.email}</h3>
        <h3>Phone Number: {investor.phone}</h3>
      </div>
      <div>
        <h2>Stall</h2>
        {stalls.length > 0 ? (
          <CustomTable>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Units</th>
                <th>Cost</th>
                <th>Return</th>
                <th>Purchase</th>
                <th>Matures</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stalls.map((stall) => (
                <InvestorViewItem key={stall._id} stall={stall} />
              ))}
            </tbody>
          </CustomTable>
        ) : (
          <CustomTable>
            <h4>Investor has no Stall</h4>
          </CustomTable>
        )}
      </div>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  investor: selectCurrentInvestor,
  stalls: selectInvestorStalls,
});

export default connect(mapStateToProps)(investorViewList);
