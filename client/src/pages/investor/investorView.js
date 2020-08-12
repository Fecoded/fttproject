import React, { Fragment } from 'react';

import TopNavbar from '../home/admin/navbar/topNav';
import InvestorView from '../../components/investor/investorView.component';

const GetInvestorView = () => (
  <Fragment>
    <TopNavbar />
    <InvestorView />
  </Fragment>
);

export default GetInvestorView;
