import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { PaystackButton } from 'react-paystack';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createWallet } from '../../redux/wallet/wallet.action';

const PayStackButton = ({ price, user: { user }, createWallet }) => {
  const amount = price * 100;
  const publicKey = 'pk_test_4041450c107aba35cea3c331c3003b3d340e0e7c';
  const Firstname = user && user.first_name;
  const Lastname = user && user.last_name;
  const Username = Firstname + ' ' + Lastname;

  const config = {
    email: user && user.email,
    price,
    amount,
    metadata: {
      name: Username,
      phone: user && user.phone,
    },
    publicKey,
  };

  const componentProps = {
    ...config,
    text: 'Make Payment',
    onSuccess: () => createWallet(config),
    onClose: () => null,
  };

  return <PaystackButton className='paystackButton' {...componentProps} />;
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  createWallet: (config) => dispatch(createWallet(config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PayStackButton);
