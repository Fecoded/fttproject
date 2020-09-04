import React from 'react';

import PaymentItems from './paymentItems';

import { ProductContainer } from '../navbar/style';
import SideNav from '../../pages/home/admin/navbar/sideNav';

const Payments = () => (
  <ProductContainer>
    <SideNav />
    <PaymentItems />
  </ProductContainer>
);

export default Payments;
