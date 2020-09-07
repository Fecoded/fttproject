import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import StallDelivered from './stallDelivered';

const StallItem = ({ stallItems, history }) => {
  const getStatus = stallItems.find((item) => item.status === 'Waiting');

  const getStatusfilter = stallItems.filter(
    (item) => item.status === 'Waiting'
  );

  const getAmountFilter = getStatusfilter.reduce(
    (result, amount) => result + +amount.costBuying,
    0
  );

  const getDate = stallItems.map((item) => getStatus && item.createdAt);
  let now = new Date(getDate[0]);

  const onOrder = () => {
    history.push('/waitingorders');
  };

  return (
    <Fragment>
      <tr className='priority-200 cursor' onClick={onOrder}>
        <td data-label='Market List'>Waiting Orders</td>
        <td data-label='No of Commodites'>{getStatusfilter.length}</td>
        <td data-label='Amount'>{getAmountFilter}</td>
        <td data-label='Purchased'>{moment(now).format('DD/MM/YYYY')}</td>
        <td data-label='Status'>Waiting</td>
      </tr>
      <StallDelivered stallItems={stallItems} />
    </Fragment>
  );
};

StallItem.propTypes = {
  item: PropTypes.object,
};

export default withRouter(StallItem);
