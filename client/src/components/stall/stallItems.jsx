import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const StallItem = ({ item }) => {
  const { productName, costBuying, unit_number, createdAt, status } = item;

  let now = new Date(createdAt);
  const Mature = now.setDate(now.getDate() + 12 * 7);

  return (
    <tr className='priority-200'>
      <td data-label='Product'>{productName}</td>
      <td data-label='Units'>{unit_number}</td>
      <td data-label='Amount'>{costBuying}</td>
      <td data-label='Purchased'>{moment(createdAt).format('DD/MM/YYYY')}</td>
      <td data-label='Delivered'>{moment(Mature).format('DD/MM/YYYY')}</td>
      <td data-label='Status'>{status}</td>
      <td></td>
    </tr>
  );
};

StallItem.propTypes = {
  item: PropTypes.object,
};

export default StallItem;
