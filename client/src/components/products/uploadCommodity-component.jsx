import React from 'react';

import SideNavbar from '../../pages/home/admin/navbar/sideNav';
import { ProductContainer } from '../navbar/style';
import UploadForm from '../admin/uploadForm';

const Commodity = () => (
  <ProductContainer>
    <SideNavbar />
    <UploadForm />
  </ProductContainer>
);

export default Commodity;
