import React from 'react';

import SideNavbar from '../../pages/home/admin/navbar/sideNav';
import { ProductContainer } from '../navbar/style';

import InvestorProfileView from './investorProfileView.component';

const InvestorProfile = () => {
  return (
    <ProductContainer>
      <SideNavbar />
      <InvestorProfileView />
    </ProductContainer>
  );
};

export default InvestorProfile;
