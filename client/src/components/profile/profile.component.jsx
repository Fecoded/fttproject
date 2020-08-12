import React from 'react';

import SideNavbar from '../navbar/sideNav';
import { ProductContainer } from '../navbar/style';
import ProfileForm from './profileForm.component';

const Profile = () => (
  <ProductContainer>
    <SideNavbar />
    <ProfileForm />
  </ProductContainer>
);

export default Profile;
