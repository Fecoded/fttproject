import React from 'react';

import SideNavbar from '../../pages/home/admin/navbar/sideNav';
import { ProductContainer } from '../navbar/style';
import Users from '../admin/userList';

const View = () => (
  <ProductContainer>
    <SideNavbar />
    <Users />
  </ProductContainer>
);

export default View;
