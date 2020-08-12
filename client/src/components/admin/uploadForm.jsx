import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { Form } from '../form/form-style';
import { Button } from '../button';
import {
  Card,
  ImageContainer,
  Image,
  FormControl,
} from '../../pages/auth/auth-style';
import { createCommodity } from '../../redux/commodity/commodity.action';

// Styles
import img from '../../assets/farms.jpeg';

const UploadForm = ({ createCommodity }) => {
  const [image, setFile] = useState('');
  const [farm_name, setFarmname] = useState('');
  const [description, setDescription] = useState('');
  const [product_name, setProductname] = useState('');
  const [unit_number, setUnitNumber] = useState('');
  const [buying_price, setBuyingPrice] = useState('');
  const [selling_price, setSellingPrice] = useState('');
  const [duration, setDuration] = useState('');

  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const starting_unit = unit_number;
    createCommodity({
      image,
      farm_name,
      description,
      product_name,
      starting_unit,
      unit_number,
      buying_price,
      selling_price,
      duration,
    });

    inputRef.current.value = '';
    setFile(null);
    setFarmname('');
    setDescription('');
    setProductname('');
    setUnitNumber('');
    setBuyingPrice('');
    setSellingPrice('');
    setDuration('');
  };

  return (
    <Card>
      <Form onSubmit={onSubmit}>
        <FormControl>
          <input
            type='file'
            name='image'
            ref={inputRef}
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <small>Image should be less than 500kb</small>
        </FormControl>

        <FormControl>
          <input
            type='text'
            name='product_name'
            value={product_name}
            placeholder='Commodity Name'
            required
            onChange={(e) => setProductname(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <input
            type='text'
            name='description'
            value={description}
            placeholder='About the Product'
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <input
            type='text'
            name='farm_name'
            value={farm_name}
            placeholder='Farm Name/Alias'
            required
            onChange={(e) => setFarmname(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <input
            type='number'
            name='buying_price'
            value={buying_price}
            placeholder='Price Per Kg'
            required
            onChange={(e) => setBuyingPrice(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <input
            type='number'
            name='selling_price'
            value={selling_price}
            placeholder='ROI in Percent'
            required
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <input
            type='text'
            name='duration'
            value={duration}
            placeholder='Duration'
            required
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <input
            type='number'
            name='unit_number'
            value={unit_number}
            placeholder='Number of Units'
            required
            onChange={(e) => setUnitNumber(e.target.value)}
          />
        </FormControl>

        <Button>Submit</Button>
      </Form>
      <ImageContainer>
        <Image src={img} />
      </ImageContainer>
    </Card>
  );
};

export default connect(null, { createCommodity })(UploadForm);
