import React from 'react';

import TopNavbar from '../../components/navbar/topNav';
import WaitingOrders from '../../components/stall/waitingOrders';

const WaitingOrderPage = () => {
  return (
    <div>
      <TopNavbar />
      <WaitingOrders />
    </div>
  );
};

export default WaitingOrderPage;
