import React from 'react';

import TopNavbar from './navbar/topNav';
import Commodities from '../../../components/products/commodityView-component';

const CommodityList = () => {
  return (
    <div>
      <TopNavbar />
      <Commodities />
    </div>
  );
};

export default CommodityList;
