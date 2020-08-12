import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { CardContainer } from './style';
import CommodityItem from './commodity.component';

import { getCommodity } from '../../redux/commodity/commodity.action';
import {
  selectCommodityItems,
  selectCommodityTotalPages,
  selectCommodityCurrentPage,
} from '../../redux/commodity/commodity.selectors';

const Commodity = ({
  getCommodity,
  commodityItems,
  totalPages,
  currentPage,
}) => {
  useEffect(() => {
    getCommodity();
  }, [getCommodity]);

  return (
    <Fragment>
      <CardContainer>
        {commodityItems.map((item) => (
          <CommodityItem key={item._id} item={item} />
        ))}
      </CardContainer>
      <div className='btnCount mt-1'>
        {currentPage > 1 && (
          <input
            type='button'
            value='&#10094;&#10094; Previous'
            onClick={() => getCommodity(currentPage - 1)}
          />
        )}
        {currentPage !== totalPages && (
          <input
            type='button'
            value='Next &#10095;&#10095;'
            onClick={() => getCommodity(currentPage + 1)}
          />
        )}
      </div>
    </Fragment>
  );
};

Commodity.propTypes = {
  getCommodity: PropTypes.func,
  commodityItems: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => ({
  getCommodity: (count) => dispatch(getCommodity(count)),
});

const mapStateToProps = createStructuredSelector({
  commodityItems: selectCommodityItems,
  totalPages: selectCommodityTotalPages,
  currentPage: selectCommodityCurrentPage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Commodity);
