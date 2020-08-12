import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import {
  selectCurrentInvestor,
  selectInvestorProfile,
} from '../../redux/investor/investor.selectors';

import { Card } from './style';

const InvestorProfileView = ({ investor, profile }) => {
  return (
    <Card className='mt-1'>
      <h2>Biodata</h2>
      <div className='investor-detail'>
        <h3>Full Name: {`${investor.first_name} ${investor.last_name}`}</h3>
        <h3>Email Address: {investor.email}</h3>
        <h3>Gender: {profile.gender}</h3>
        <h3>Phone Number: {investor.phone}</h3>
        <h3>Date of Birth: {profile.date_of_birth}</h3>
        <h3>Account Name: {profile.account_name}</h3>
        <h3>Account No: {profile.account_number}</h3>
        <h3>Bank: {profile.bank}</h3>
        <h3>BVN: {profile.bvn}</h3>
        <h3>
          Date of Registration: {moment(profile.createdAt).format('DD/MM/YYYY')}
        </h3>
      </div>
      <h2>Next of Kin</h2>
      <div className='investor-details'>
        <h3>Name: {profile.next_of_kin.name}</h3>
        <h3>Gender: {profile.next_of_kin.nok_gender}</h3>
        <h3>Relationship: {profile.next_of_kin.relationship}</h3>
        <h3>Email: {profile.next_of_kin.email}</h3>
        <h3>Phone: {profile.next_of_kin.phone}</h3>
      </div>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  investor: selectCurrentInvestor,
  profile: selectInvestorProfile,
});

export default connect(mapStateToProps)(InvestorProfileView);
