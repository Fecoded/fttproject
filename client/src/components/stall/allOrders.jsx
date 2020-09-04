import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import moment from 'moment';

import { selectStallItems } from '../../redux/stall/stall.selector';

import SideNavbar from '../navbar/sideNav';
import { ProductContainer } from '../navbar/style';
import { Card } from './style';

const AllOrders = ({ stallItems }) => {
  const getStatusfilter = stallItems.filter(
    (item) => item.status === 'Waiting'
  );

  const getKg = getStatusfilter.reduce(
    (result, amount) => result + +amount.unit_number,
    0
  );

  const getTotalCost = getStatusfilter.reduce(
    (result, amount) => result + +amount.buyingCost,
    0
  );

  return (
    <ProductContainer>
      <SideNavbar />
      <Card>
        <h3>No of Commodities: {getStatusfilter.length}</h3>
        {getStatusfilter.map((item) => (
          <div key={item._id}>
            <h4>
              {`${item.productName} ${item.unit_number}kg NGN${
                item.buyingCost
              } ${moment(item.createdAt).format('DD/MM/YYYY')}`}{' '}
            </h4>
          </div>
        ))}
        <h4>Total KG: {getKg}kg </h4>
        <h4>Total Cost: NGN{getTotalCost} </h4>
      </Card>
    </ProductContainer>
  );
};

AllOrders.propTypes = {
  stallItems: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  stallItems: selectStallItems,
});

export default connect(mapStateToProps)(AllOrders);
