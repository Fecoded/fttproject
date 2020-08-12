import React from 'react';

import TopNavbar from '../../../components/navbar/topNav';
import Products from '../../../components/products/products-component';
import TopImage from '../../../components/products/CommodityGrid';

const HomePage = () => {
  return (
    <div>
      <TopNavbar />
      <TopImage />
      <Products />
    </div>
  );
};

export default HomePage;
