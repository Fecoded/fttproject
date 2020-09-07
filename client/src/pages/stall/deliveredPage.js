import React from 'react';

import TopNavbar from '../../components/navbar/topNav';
import DeliveredOrders from '../../components/stall/deliveredOrders';

const DeliveredOrderPage = () => {
  return (
    <div>
      <TopNavbar />
      <DeliveredOrders />
    </div>
  );
};

export default DeliveredOrderPage;
