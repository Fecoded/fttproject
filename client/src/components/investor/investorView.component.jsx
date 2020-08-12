import React from 'react';

import SideNavbar from '../../pages/home/admin/navbar/sideNav';
import { ProductContainer } from '../navbar/style';

import InvestorViewList from './investorViewList.component';

const InvestorView = () => (
  <ProductContainer>
    <SideNavbar />
    <InvestorViewList />
  </ProductContainer>
);

export default InvestorView;
