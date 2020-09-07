import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import swal from 'sweetalert';

import { updateStatus } from '../../redux/stall/stall.action';

const InvestorViewItem = ({ stall, updateStatus, history }) => {
  const onChangeStatus = () => {
    swal({
      title: 'Afwin Notification',
      text: `Are you sure you want to confirm?`,
      icon: 'info',
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        updateStatus(stall._id);
        history.push(`/admin/investors`);
      }
    });
  };

  return (
    <tr className='priority-200'>
      <td data-label='Product Name'>{stall.productName}</td>
      <td data-label='Units'>{stall.unit_number}</td>
      <td data-label='Cost'>{stall.costBuying}</td>
      <td data-label='Purchased'>
        {moment(stall.createdAt).format('DD/MM/YYYY')}
      </td>
      {stall.status === 'Waiting' ? (
        <td data-label='Status' className='red cursor' onClick={onChangeStatus}>
          <i className='fa fa-spinner'></i>
        </td>
      ) : (
        <td data-label='Status' className='green'>
          <i className='fas fa-check-circle'></i>
        </td>
      )}
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateStatus: (id) => dispatch(updateStatus(id)),
});

export default connect(null, mapDispatchToProps)(withRouter(InvestorViewItem));
