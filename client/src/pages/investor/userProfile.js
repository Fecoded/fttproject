import React, { Fragment } from 'react';

import TopNavbar from '../home/admin/navbar/topNav';
import GetUserProfile from '../../components/investor/investorProfile.component';

const UserProfile = () => (
  <Fragment>
    <TopNavbar />
    <GetUserProfile />
  </Fragment>
);

export default UserProfile;
