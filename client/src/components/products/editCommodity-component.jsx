import React from 'react';

import SideNavbar from '../../pages/home/admin/navbar/sideNav';
import { ProductContainer } from '../navbar/style';
import EditForm from '../admin/EditForm';

const EditCommodity = () => (
  <ProductContainer>
    <SideNavbar />
    <EditForm />
  </ProductContainer>
);

export default EditCommodity;
