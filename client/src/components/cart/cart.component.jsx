import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

import {
  selectCartItems,
  selectCartItemCount,
} from '../../redux/cart/cart.selectors';
import { selectFundedWallet } from '../../redux/wallet/wallet.selector';
import {
  getWallet,
  deleteAmount,
  getFundedWallet,
} from '../../redux/wallet/wallet.action';
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
  createStall,
  clearCart,
  getWallet,
  getFundedWallet,
  deleteAmount,
  fundedWallet,
}) => {
  useEffect(() => {
    getWallet();
    getFundedWallet();
  }, [getWallet, getFundedWallet]);

  const currentWallet = fundedWallet && fundedWallet.amount;
  const amount = currentWallet - totalCount;

  const onCheckBalance = () => {
    if (totalCount > currentWallet) {
      setAlert('Insufficient Funds', 'error');
    } else {
      if (cartItems.length > 0) {
        swal({
          title: 'Are you sure?',
          text: `You want to Pay NGN ${totalCount} for product(s) on Cart`,
          icon: 'info',
          buttons: true,
          dangerMode: true,
        }).then((result) => {
          if (result) {
            createStall(cartItems);
            deleteAmount({
              user: fundedWallet.user,
              amount,
            });
            setAlert('Product Purchased, Please Check My Orders', 'success');
            clearCart();
          }
        });
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
  setAlert: PropTypes.func,
  clearCart: PropTypes.func,
  getWallet: PropTypes.func,
  deleteAmount: PropTypes.func,
  fundedWallet: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCount: selectCartItemCount,
  fundedWallet: selectFundedWallet,
});

const mapDispatchToProps = (dispatch) => ({
  setAlert: (msg, typeErr) => dispatch(setAlert(msg, typeErr)),
  createStall: (cartItems) => dispatch(createStall(cartItems)),
  clearCart: () => dispatch(clearCart()),
  getWallet: () => dispatch(getWallet()),
  getFundedWallet: () => dispatch(getFundedWallet()),
  deleteAmount: (formData) => dispatch(deleteAmount(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
