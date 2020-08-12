import React, { Fragment } from 'react';

import CartList from '../../components/cart/cart.component';
import TopNav from '../../components/navbar/topNav';

const Cart = () => (
  <Fragment>
    <TopNav />
    <CartList />
  </Fragment>
);

export default Cart;
