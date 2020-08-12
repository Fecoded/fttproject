import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUsers } from '../../redux/admin/admin.selectors';

import { getUsers } from '../../redux/admin/admin.action';
import UserItem from './userItem';

import { Container, Table } from './style';

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Container className='mt-1'>
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
            <UserItem key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
