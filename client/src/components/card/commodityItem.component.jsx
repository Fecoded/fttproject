import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCommodityItem } from '../../redux/commodity/commodity.selectors';

import SideNavbar from '../navbar/sideNav';
import { ProductContainer } from '../navbar/style';
import TopNavbar from '../navbar/topNav';
import CommodityDetails from './commodityDetails';

const CommodityItem = ({ commodityItem }) => (
  <Fragment>
    <TopNavbar />
    <ProductContainer>
      <SideNavbar />
      <div>
        <h4 className='mt-1'>Product Details</h4>
        <CommodityDetails commodityItem={commodityItem} />
      </div>
    </ProductContainer>
  </Fragment>
);

const mapStateToProps = createStructuredSelector({
  commodityItem: selectCommodityItem,
});

export default connect(mapStateToProps)(CommodityItem);
