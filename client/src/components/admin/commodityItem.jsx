import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCurrentCommodity } from '../../redux/commodity/commodity.action';

const CommodityItem = ({ item, getCurrentCommodity, history }) => {
  const editCommodity = () => {
    getCurrentCommodity(item);

    history.push('/admin/edit');
  };

  return (
    <tr className='priority-200'>
      <td data-label='Product Name'>{item.product_name}</td>
      <td data-label='Farm Name'>{item.farm_name}</td>
      <td data-label='Starting Unit'>{item.starting_unit}</td>
      <td data-label='Unit Left'>{item.unit_number}</td>
      <td data-label='Buying Price'>{item.buying_price}</td>
      <td data-label='ROI'>{item.selling_price}</td>
      <td data-label='Duration'>{item.duration}</td>
      <td className='edit' onClick={editCommodity}>
        <i className='fa fa-edit'></i>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCurrentCommodity: (item) => dispatch(getCurrentCommodity(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(CommodityItem));
