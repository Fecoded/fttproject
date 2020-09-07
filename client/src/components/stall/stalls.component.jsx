import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SideNavbar from '../navbar/sideNav';
import { ProductContainer } from '../navbar/style';

import { selectStallItems } from '../../redux/stall/stall.selector';
import { getStall } from '../../redux/stall/stall.action';

import StallItem from './stallItems';
import { Container, Table } from './style';

const Stall = ({ stallItems, getStall }) => {
  useEffect(() => {
    getStall();
  }, [getStall]);

  return (
    <ProductContainer>
      <SideNavbar />
      <div>
        <h4 className='mt-1'>My Orders: &#10095;&#10095;</h4>
        <Container className='mt-1'>
          <Table>
            <thead>
              <tr>
                <th>Orders</th>
                <th>No of Commodites</th>
                <th>Amount</th>
                <th>Purchased</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <StallItem stallItems={stallItems} />
            </tbody>
          </Table>
        </Container>
      </div>
    </ProductContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  stallItems: selectStallItems,
});

const mapDispatchToProps = (dispatch) => ({
  getStall: () => dispatch(getStall()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stall);
