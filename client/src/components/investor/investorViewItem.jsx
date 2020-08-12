import React from 'react';
import moment from 'moment';

const InvestorViewItem = ({ stall }) => {
  let now = new Date(stall.createdAt);
  const Mature = now.setDate(now.getDate() + 12 * 7);

  return (
    <tr className='priority-200'>
      <td data-label='Product Name'>{stall.productName}</td>
      <td data-label='Units'>{stall.unit_number}</td>
      <td data-label='Cost'>{stall.costBuying}</td>
      <td data-label='Return'>{stall.costReturn}</td>
      <td data-label='Purchased'>
        {moment(stall.createdAt).format('DD/MM/YYYY')}
      </td>
      <td data-label='Mature'>{moment(Mature).format('DD/MM/YYYY')}</td>
      <td data-label='Status'>{stall.status}</td>
      <td></td>
    </tr>
  );
};

export default InvestorViewItem;
