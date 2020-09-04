import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PaymentList from './paymentList';

import {
  selectWalletItems,
  selectWalletFilter,
} from '../../redux/wallet/wallet.selector';
import { getWallets, filterPayment } from '../../redux/wallet/wallet.action';

import { Container, Table } from './style';
import { FormControl } from '../../pages/auth/auth-style';

const PaymentItems = ({ walletItems, getWallets, filterPayment, filtered }) => {
  useEffect(() => {
    getWallets();
  }, [getWallets]);

  return (
    <Container className='mt-1'>
      <FormControl>
        <input
          type='search'
          placeholder='Search'
          onChange={(e) => filterPayment(e.target.value)}
        />
      </FormControl>
      <Table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>POP</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered !== null
            ? filtered.map((walletItem) => (
                <PaymentList key={walletItem._id} walletItem={walletItem} />
              ))
            : walletItems.map((walletItem) => (
                <PaymentList key={walletItem._id} walletItem={walletItem} />
              ))}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  walletItems: selectWalletItems,
  filtered: selectWalletFilter,
});

const mapDispatchToProps = (dispatch) => ({
  getWallets: () => dispatch(getWallets()),
  filterPayment: (text) => dispatch(filterPayment(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentItems);
