import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import swal from 'sweetalert';

import {
  updateStatus,
  updateAmount,
  getCurrentPayment,
} from '../../redux/wallet/wallet.action';

const PaymentList = ({
  walletItem,
  updateStatus,
  updateAmount,
  getCurrentPayment,
}) => {
  const onChangeStatus = () => {
    swal({
      title: 'Afwin Notification',
      text: `Are you sure you want to confirm payment?`,
      icon: 'info',
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        updateStatus(walletItem._id);
        updateAmount({
          user: walletItem.user,
          amount: +walletItem.amount,
        });
        getCurrentPayment(walletItem);
      }
    });
  };

  return (
    <tr className='priority-200'>
      <td data-label='Full Name'>{`${walletItem.first_name} ${walletItem.last_name}`}</td>
      <td data-label='Email'>{walletItem.email}</td>
      <td data-label='Phone'>{walletItem.phone}</td>
      <td data-label='POP'>
        <img src={walletItem.img} alt='' />
      </td>
      <td data-label='Amount'>{walletItem.amount}</td>
      <td data-label='Date'>
        {moment(walletItem.createdAt).format('DD/MM/YYYY')}
      </td>
      {walletItem.status === 'Pending' ? (
        <td className='cursor red' onClick={onChangeStatus}>
          <i className='fa fa-spinner'></i>
        </td>
      ) : (
        <td className='green'>
          <i className='fas fa-check-circle'></i>
        </td>
      )}
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateStatus: (id) => dispatch(updateStatus(id)),
  updateAmount: (formData) => dispatch(updateAmount(formData)),
  getCurrentPayment: (payment) => dispatch(getCurrentPayment(payment)),
});

export default connect(null, mapDispatchToProps)(PaymentList);
