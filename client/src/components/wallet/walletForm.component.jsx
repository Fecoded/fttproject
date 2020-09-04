import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { createWallet } from '../../redux/wallet/wallet.action';
import { FormControl } from '../../pages/auth/auth-style';

import { Button } from '../button';

const WalletForm = ({ user: { user }, createWallet }) => {
  const [image, setImage] = useState('');
  const [amount, setPrice] = useState('');

  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    createWallet({
      image,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      amount,
    });

    inputRef.current.value = '';
    setImage(null);
    setPrice('');
  };

  return (
    <div className='cover-border'>
      <form className='paystackForm' onSubmit={onSubmit}>
        <h3>Proof of Payment</h3>
        <FormControl>
          <input
            type='file'
            name='image'
            ref={inputRef}
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
          <small>Image should be less than 500kb</small>
        </FormControl>
        <FormControl>
          <input
            type='number'
            name='amount'
            value={amount}
            placeholder='Enter Amount Paid'
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { createWallet })(WalletForm);
