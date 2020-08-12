import React, { useState } from 'react';

import { FormControl } from '../../pages/auth/auth-style';

import PayStackButton from '../paystackButton/paystackbutton.component';

const WalletForm = () => {
  const [price, setPrice] = useState('');

  return (
    <div className='cover-border'>
      <form className='paystackForm'>
        <h3>Enter Top-Up Amount</h3>
        <FormControl>
          <input
            type='number'
            name='price'
            value={price}
            placeholder='Enter Amount'
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>
      </form>
      <PayStackButton price={+price} />
    </div>
  );
};

export default WalletForm;
