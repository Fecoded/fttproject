import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from '../button';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createWallet } from '../../redux/wallet/wallet.action';

const PayStackButton = ({ price, user: { user }, createWallet }) => {
  const amount = price * 100;
  const publicKey = 'FLWPUBK_TEST-3536cee670dbf7f45ea3f3b8ecfc4c76-X';
  const Firstname = user && user.first_name;
  const Lastname = user && user.last_name;
  const Username = Firstname + ' ' + Lastname;

  const makePayment = () => {
    window.getpaidSetup({
      amount: amount,
      txref: 'rave-checkout-1508751596',
      PBFPubKey: publicKey,
      custom_title: 'Afwin Farm',
      payment_method: 'both',
      customer_email: 'john@example.com',
      customer_phone: '08033445566',
      onclose: function () {},
      callback: function (d) {
        //  var flw_ref = d.tx.flwRef;
        if (
          d.tx.chargeResponseCode === '00' ||
          d.tx.chargeResponseCode === '0'
        ) {
          console.log('Wow! That was fast and easy!');
        } else {
          console.error('Ouch! Please try again!');
        }
        console.log(d);
      },
    });
  };
  // const componentProps = {
  //   ...config,
  //   text: 'Make Payment',
  //   onSuccess: () => createWallet(config),
  //   onClose: () => null,
  // };

  return <input type='button' value='Make Payment' onClick={makePayment} />;
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  createWallet: (config) => dispatch(createWallet(config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PayStackButton);
