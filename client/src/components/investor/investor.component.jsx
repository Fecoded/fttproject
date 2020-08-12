import React from 'react';

import SideNavbar from '../../pages/home/admin/navbar/sideNav';
import { ProductContainer } from '../navbar/style';

import InvestorsList from './investorList.component';

const Investors = () => {
  return (
    <ProductContainer>
      <SideNavbar />
      <InvestorsList />
    </ProductContainer>
  );
};

export default Investors;
