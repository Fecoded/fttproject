import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCommodityItems } from '../../redux/commodity/commodity.selectors';

import { getCommodity } from '../../redux/commodity/commodity.action';
import CommodityItem from './commodityItem';

import { Container, Table } from './style';

const Commodity = ({ commodityItems, getCommodity }) => {
  useEffect(() => {
    getCommodity();
  }, [getCommodity]);

  return (
    <Container className='mt-1'>
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Farm Name</th>
            <th>Starting Unit</th>
            <th>Unit Left</th>
            <th>Buying Price</th>
            <th>Return</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {commodityItems.map((item) => (
            <CommodityItem key={item._id} item={item} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  commodityItems: selectCommodityItems,
});

const mapDispatchToProps = (dispatch) => ({
  getCommodity: () => dispatch(getCommodity()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Commodity);
