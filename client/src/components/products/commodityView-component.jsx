import React from 'react';

import SideNavbar from '../../pages/home/admin/navbar/sideNav';
import { ProductContainer } from '../navbar/style';
import Commodities from '../admin/commodity';

const View = () => (
  <ProductContainer>
    <SideNavbar />
    <Commodities />
  </ProductContainer>
);

export default View;
