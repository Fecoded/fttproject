import React from 'react';

import Commodity from '../card';
import SideNavbar from '../navbar/sideNav';
import { ProductContainer } from '../navbar/style';

const Market = () => (
  <ProductContainer>
    <SideNavbar />
    <div>
      <h4 className='mt-1 w-10'>
        Market: &#10095;&#10095; Available and Sold Out
      </h4>
      <Commodity />
    </div>
  </ProductContainer>
);

export default Market;
