import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { Form } from '../form/form-style';
import { Button } from '../button';
import { FormControl } from '../../pages/auth/auth-style';
import { Card } from './style';
import { updateCommodity } from '../../redux/commodity/commodity.action';
import { selectCurrentCommodity } from '../../redux/commodity/commodity.selectors';
import { loadAdmin } from '../../redux/admin/admin.action';

const EditForm = ({ current, updateCommodity, loadAdmin, history }) => {
  const [farm_name, setFarmname] = useState('');
  const [product_name, setProductname] = useState('');
  const [description, setDescription] = useState('');
  const [unit_number, setUnitNumber] = useState('');
  const [buying_price, setBuyingPrice] = useState('');
  const [selling_price, setSellingPrice] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    if (current) {
      setFarmname(current.farm_name);
      setProductname(current.product_name);
      setDescription(current.description);
      setUnitNumber(current.unit_number);
      setBuyingPrice(current.buying_price);
      setSellingPrice(current.selling_price);
      setDuration(current.duration);
    }
    loadAdmin();
  }, [current, loadAdmin]);

  const onSubmit = (e) => {
    e.preventDefault();
    updateCommodity({
      id: current._id,
      farm_name,
      product_name,
      description,
      unit_number,
      buying_price,
      selling_price,
      duration,
    });

    history.push('/admin/commodities');
  };

  return (
    <Card className='mt-1'>
      <Form onSubmit={onSubmit}>
        <FormControl>
          <label>Farm Name/Alias</label>
          <input
            type='text'
            name='farm_name'
            value={farm_name || ''}
            placeholder='Farm Name/Alias'
            onChange={(e) => setFarmname(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <label>Product Name</label>
          <input
            type='text'
            name='product_name'
            value={product_name || ''}
            placeholder='Commodity Name'
            onChange={(e) => setProductname(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <label>About the Product</label>
          <input
            type='text'
            name='description'
            value={description || ''}
            placeholder='About the Product'
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <label>Unit Number</label>
          <input
            type='number'
            name='unit_number'
            value={unit_number || ''}
            placeholder='Number of Units'
            onChange={(e) => setUnitNumber(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <label>Cost per Unit</label>
          <input
            type='number'
            name='buying_price'
            value={buying_price || ''}
            placeholder='Cost per Unit'
            onChange={(e) => setBuyingPrice(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <label>ROI in Percent</label>
          <input
            type='number'
            name='selling_price'
            value={selling_price || ''}
            placeholder='ROI in Price'
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <label>Duration</label>
          <input
            type='text'
            name='duration'
            value={duration || ''}
            placeholder='Duration'
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormControl>

        <Button>Submit</Button>
      </Form>
    </Card>
  );
};

EditForm.propTypes = {
  current: PropTypes.object,
  updateCommodity: PropTypes.func,
  loadAdmin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  current: selectCurrentCommodity,
});

const mapDispatchToProps = (dispatch) => ({
  updateCommodity: (commodity) => dispatch(updateCommodity(commodity)),
  loadAdmin: () => dispatch(loadAdmin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditForm));
