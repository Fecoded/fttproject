import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import { currencyFormat } from '../js/main';

const StallDelivered = ({ stallItems, history }) => {
  const getStatus = stallItems.find((item) => item.status !== 'Waiting');

  const getStatusfilter = stallItems.filter(
    (item) => item.status !== 'Waiting'
  );

  const getAmountFilter = getStatusfilter.reduce(
    (result, amount) => result + +amount.costBuying,
    0
  );

  const getDate = stallItems.map((item) => getStatus && item.createdAt);
  let now = new Date(getDate[0]);

  const onOrder = () => {
    history.push('/deliveredorders');
  };
  return (
    <tr className='priority-200 cursor' onClick={onOrder}>
      <td data-label='Market List'>Delivered Orders</td>
      <td data-label='No of Commodites'>{getStatusfilter.length}</td>
      <td data-label='Amount'>{currencyFormat(getAmountFilter)}</td>
      <td data-label='Purchased'>{moment(now).format('DD/MM/YYYY')}</td>
      <td data-label='Status'>Delivered</td>
    </tr>
  );
};

export default withRouter(StallDelivered);
