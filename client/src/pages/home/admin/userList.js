import React from 'react';

import TopNavbar from './navbar/topNav';
import Users from '../../../components/products/userList-component';

const UserList = () => {
  return (
    <div>
      <TopNavbar />
      <Users />
    </div>
  );
};

export default UserList;
