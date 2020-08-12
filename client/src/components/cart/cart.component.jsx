import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import {
  selectCartItems,
  selectCartItemCount,
} from '../../redux/cart/cart.selectors';
import { selectWalletItem } from '../../redux/wallet/wallet.selector';
import { getWallet, updateAmount } from '../../redux/wallet/wallet.action';
import { setAlert } from '../../redux/alert/alert.action';
import { createStall } from '../../redux/stall/stall.action';
import { clearCart } from '../../redux/cart/cart.action';
import CartItem from './cartItem.component';
import { Container, Table, Card } from './cart.style';
import { ProductContainer } from '../navbar/style';
import SideNav from '../navbar/sideNav';

const Cart = ({
  cartItems,
  totalCount,
  setAlert,
  wallet,
  createStall,
  clearCart,
  getWallet,
  updateAmount,
}) => {
  useEffect(() => {
    getWallet();
  }, [getWallet]);

  const currentWallet = wallet && wallet.amount;
  const amount = currentWallet - totalCount;

  const onCheckBalance = () => {
    if (totalCount > currentWallet) {
      setAlert('Insufficient Funds', 'error');
    } else {
      if (cartItems.length > 0) {
        if (window.confirm(`Pay NGN ${totalCount} for product on Cart`)) {
          createStall(cartItems);
          updateAmount(amount);
          setAlert('Product Purchased, Please Check Your Stall', 'success');
          clearCart();
        }
      } else {
        setAlert('Cart is empty', 'error');
      }
    }
  };
  return (
    <ProductContainer>
      <SideNav />
      <Container>
        <Card>
          <Table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Unit</th>
                <th>Cost</th>
                <th>Return</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </tbody>
          </Table>
          <div className='cart'>
            <h4 className='left'>Total: NGN {totalCount}</h4>
            <input
              type='button'
              value='Proceed to Payment'
              onClick={onCheckBalance}
            />
          </div>
        </Card>
      </Container>
    </ProductContainer>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
  totalCount: PropTypes.number,
  wallet: PropTypes.object,
  setAlert: PropTypes.func,
  clearCart: PropTypes.func,
  getWallet: PropTypes.func,
  updateAmount: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCount: selectCartItemCount,
  wallet: selectWalletItem,
});

const mapDispatchToProps = (dispatch) => ({
  setAlert: (msg, typeErr) => dispatch(setAlert(msg, typeErr)),
  createStall: (cartItems) => dispatch(createStall(cartItems)),
  clearCart: () => dispatch(clearCart()),
  getWallet: () => dispatch(getWallet()),
  updateAmount: (amount) => dispatch(updateAmount(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
