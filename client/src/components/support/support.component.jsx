import React from 'react';

import { ProductContainer } from '../navbar/style';
import SideNavbar from '../navbar/sideNav';
import { Container, Card } from './style';

const Support = () => (
  <ProductContainer>
    <SideNavbar />
    <Container>
      <Card className='mt-1'>
        <h1>Contact Us</h1>
        <i className='fas fa-phone-alt fa-3x py-2 bg-primary'></i>
        <h4>+2347080853432</h4>
        <i className='fas fa-envelope fa-3x py-2 bg-primary'></i>
        <h4>awi@afwin.org</h4>
      </Card>
    </Container>
  </ProductContainer>
);

export default Support;
