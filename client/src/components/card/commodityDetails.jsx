import React from 'react';

import { ProductContainer } from './style';
import CommodityDetail from './commodityDetail';

const CommodityDetails = ({ commodityItem }) => {
  return (
    <ProductContainer>
      <CommodityDetail commodityItem={commodityItem} />
    </ProductContainer>
  );
};

export default CommodityDetails;
