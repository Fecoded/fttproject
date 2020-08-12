import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { Container, Card } from './wallet.styles';
import { ProductContainer } from '../navbar/style';
import SideNavbar from '../navbar/sideNav';
import WalletForm from './walletForm.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectWalletItem } from '../../redux/wallet/wallet.selector';
import { getWallet } from '../../redux/wallet/wallet.action';

const Wallet = ({ user: { user }, getWallet, wallet }) => {
  useEffect(() => {
    getWallet();
  }, [getWallet]);

  return (
    <ProductContainer>
      <SideNavbar />
      <Container>
        <Card className='mt-1'>
          <div className=''>
            <p>Wallet Balance</p>
            <h3 className='fs-2'>NGN {(wallet && wallet.amount) || 0}</h3>
            <div className='divider'></div>
            <h3 className='mt-1'>
              Wallet - AFWIN/
              {`${user && user.first_name} ${user && user.last_name}`}
            </h3>
            <div className='card'>
              <i className='fas fa-credit-card fa-3x fa-rotate-30 pr-2 mt-1'></i>
              <h2 className='note'>
                Top Up With Debit Card
                <small>Use your debit card to top-up your wallet</small>
              </h2>
            </div>
            <div className='divider'></div>
            <WalletForm />
          </div>
        </Card>
      </Container>
    </ProductContainer>
  );
};

Wallet.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  wallet: selectWalletItem,
});

export default connect(mapStateToProps, { getWallet })(Wallet);
