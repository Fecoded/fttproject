import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import InvestorItem from './investorItem.component';

import { selectUsers } from '../../redux/admin/admin.selectors';
import { getUsers } from '../../redux/admin/admin.action';
import { getWallets } from '../../redux/wallet/wallet.action';
import { selectWalletItems } from '../../redux/wallet/wallet.selector';

import { Container, Table } from './style';

const InvestorList = ({ users, walletItems, getWallets, getUsers }) => {
  useEffect(() => {
    getWallets();
    getUsers();
  }, [getWallets, getUsers]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <InvestorItem
              key={user._id}
              user={user}
              walletItems={walletItems}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

InvestorList.propTypes = {
  users: PropTypes.array,
  walletItems: PropTypes.array,
  getWallets: PropTypes.func,
  getUsers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  walletItems: selectWalletItems,
});

const mapDispatchToProps = (dispatch) => ({
  getWallets: () => dispatch(getWallets()),
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvestorList);
