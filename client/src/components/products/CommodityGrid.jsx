import React from 'react';

import { Container, Card, SideCard } from './Style';

import ReactLogo from '../../assets/pic.svg';
import img1 from '../../assets/carrots2.jpg';
import img2 from '../../assets/maize.jpg';
import img3 from '../../assets/spinach.jpg';
import img4 from '../../assets/pumpkin.jpg';

const CommodityGrid = () => (
  <Container>
    <Card>
      <img src={ReactLogo} alt='' />
      <SideCard>
        <img src={img1} alt='' />
        <img src={img2} alt='' />
        <img src={img3} alt='' />
        <img src={img4} alt='' />
      </SideCard>
    </Card>
  </Container>
);

export default CommodityGrid;
