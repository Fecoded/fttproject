import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import moment from 'moment';

import { selectStallItems } from '../../redux/stall/stall.selector';

import SideNavbar from '../navbar/sideNav';
import { ProductContainer } from '../navbar/style';
import { Card, Table, FlexBox } from './style';

const WaitingOrders = ({ stallItems }) => {
  const getStatusfilter = stallItems.filter(
    (item) => item.status === 'Waiting'
  );

  const getKg = getStatusfilter.reduce(
    (result, amount) => result + +amount.unit_number,
    0
  );

  const getTotalCost = getStatusfilter.reduce(
    (result, amount) => result + +amount.costBuying,
    0
  );

  return (
    <ProductContainer>
      <SideNavbar />
      <Card>
        <h3>No of Commodities: {getStatusfilter.length}</h3>
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Unit Number</th>
              <th>Cost</th>
              <th>Date of Purchase</th>
            </tr>
          </thead>
          <tbody>
            {getStatusfilter.map((item) => (
              <tr key={item._id}>
                <td>{item.productName}</td>
                <td>{item.unit_number}kg</td>
                <td>NGN{item.costBuying}</td>
                <td>{moment(item.createdAt).format('DD/MM/YYYY')}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <FlexBox>
          <h4>Total KG: {getKg}kg </h4>
          <h4>Total Cost: NGN{getTotalCost} </h4>
        </FlexBox>
      </Card>
    </ProductContainer>
  );
};

WaitingOrders.propTypes = {
  stallItems: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  stallItems: selectStallItems,
});

export default connect(mapStateToProps)(WaitingOrders);
