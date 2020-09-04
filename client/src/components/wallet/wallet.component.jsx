import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import WalletItem from './walletItem.component';

import { Container, Card, Table } from './wallet.styles';
import Spinner from '../spinner/spinner-component';
import { ProductContainer } from '../navbar/style';
import SideNavbar from '../navbar/sideNav';
import WalletForm from './walletForm.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import {
  selectWalletItem,
  selectFundedWallet,
} from '../../redux/wallet/wallet.selector';
import { getWallet, getFundedWallet } from '../../redux/wallet/wallet.action';

const Wallet = ({
  user: { user },
  getWallet,
  wallets,
  fundedWallet,
  getFundedWallet,
}) => {
  useEffect(() => {
    getWallet();
    getFundedWallet();
  }, [getWallet, getFundedWallet]);

  return (
    <ProductContainer>
      <SideNavbar />
      <Container>
        <Card className='mt-1'>
          <div>
            <p>Wallet Balance</p>
            <h3 className='fs-2'>
              NGN {(fundedWallet && fundedWallet.amount) || 0}
            </h3>
            <div className='divider'></div>
            <h3 className='mt-1'>
              Wallet - AFWIN/
              {`${user && user.first_name} ${user && user.last_name}`}
            </h3>
            <div className='card'>
              <i className='fas fa-credit-card fa-3x fa-rotate-30 pr-3 mt-1'></i>
              <div className='note'>
                <h3 className='pb-1'>Top-up Your Wallet</h3>
                <p className='fs-1'>Account Name: RAYANDMO FARMS</p>
                <p className='fs-1'>Account No: 1020264203</p>
                <p className='fs-1'>Bank: United Bank for Africa (UBA)</p>
              </div>
            </div>
            <div className='divider'></div>
            <WalletForm />
          </div>
        </Card>
        {wallets.length > 0 && (
          <div className='w-50'>
            {wallets !== null ? (
              <Table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {wallets.map((wallet) => (
                    <WalletItem key={wallet._id} wallet={wallet} />
                  ))}
                </tbody>
              </Table>
            ) : (
              <Spinner />
            )}
          </div>
        )}
      </Container>
    </ProductContainer>
  );
};

Wallet.propTypes = {
  user: PropTypes.object,
  wallets: PropTypes.array,
  fundedWallet: PropTypes.object,
  getFundedWallet: PropTypes.func,
  getWallet: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  wallets: selectWalletItem,
  fundedWallet: selectFundedWallet,
});

export default connect(mapStateToProps, { getWallet, getFundedWallet })(Wallet);
