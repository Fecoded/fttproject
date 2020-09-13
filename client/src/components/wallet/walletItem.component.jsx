import React from 'react';
import moment from 'moment';

const WalletItem = ({ wallet }) => (
  <tr>
    <td data-label='Image'>
      <img src={wallet.img} alt='' />
    </td>
    <td data-label='Amount'>{wallet.amount}</td>
    <td data-label='Date'>{moment(wallet.createdAt).format('DD/MM/YYYY')}</td>
    {wallet.status === 'Pending' ? (
      <td data-label='Status' className='red'>
        <i className='fa fa-spinner'></i>
      </td>
    ) : (
      <td data-label='Status' className='green'>
        <i className='fas fa-check-circle'></i>
      </td>
    )}
  </tr>
);

export default WalletItem;
