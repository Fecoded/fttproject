import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { addCart, removeUnit } from '../../redux/cart/cart.action';
import { setAlert } from '../../redux/alert/alert.action';

import {
  Card,
  CardHeader,
  CardBody,
  ProductName,
  CheckOutContainer,
  CheckOut,
  NotifyTag,
} from './style';

import { Button } from '../../components/button';

const CommodityDetail = ({
  commodityItem,
  user: { isAuthenticated, user },
  addCart,
  removeUnit,
  setAlert,
}) => {
  const buyingCost = +commodityItem.buying_price;
  const sellingCost = +commodityItem.selling_price;
  const productName = commodityItem.product_name;
  const productUnit = commodityItem.unit_number;

  const [unit_number, setUnit] = useState('');

  let costBuying = buyingCost * unit_number;
  costBuying = unit_number ? costBuying : buyingCost;
  const [setBuyingPrice] = useState(costBuying);

  const returnCost =
    (+commodityItem.selling_price / 100) * unit_number * buyingCost;
  const costReturn = unit_number ? returnCost : '0';
  const [setReturnCost] = useState(costReturn);

  const availableUnit = +commodityItem.unit_number - unit_number;
  const unitAvailable = unit_number ? availableUnit : commodityItem.unit_number;
  const [setAvailableUnit] = useState(unitAvailable);

  const addToCart = () => {
    addCart({
      user: user && user._id,
      id: commodityItem._id,
      img: commodityItem.img,
      unit_number,
      buyingCost,
      sellingCost,
      costReturn,
      costBuying,
      productName,
      productUnit,
    });
    removeUnit({
      id: commodityItem._id,
      unit_number: unitAvailable,
    });

    setAlert('Added to Cart', 'success');
  };

  const onChange = (e) => {
    if (e.target.value <= +commodityItem.unit_number) {
      setUnit(e.target.value);
    }
  };

  return (
    <Fragment>
      <Card>
        <CardHeader src={commodityItem.img} />
        <ProductName>
          <h3>{commodityItem.product_name}</h3>
          <h5>
            {commodityItem.unit_number !== '0' &&
              `${commodityItem.unit_number} units left`}{' '}
          </h5>
        </ProductName>
        <CardBody>
          {commodityItem.unit_number !== '0' ? (
            <NotifyTag>Now Selling</NotifyTag>
          ) : (
            <NotifyTag soldOut>Sold Out</NotifyTag>
          )}
          <h4>{commodityItem.farm_name}</h4>
          <p>{commodityItem.selling_price}% ROI</p>
          <p>{commodityItem.duration}</p>
          <small>12 weeks initially then every 6 weeks after first cycle</small>
        </CardBody>
      </Card>
      <CheckOutContainer>
        <CheckOut>
          <h4>Cost Per Units: {commodityItem.buying_price}</h4>
          {commodityItem.unit_number !== '0' && (
            <h4>
              Enter Unit
              <input
                type='number'
                name='unit_number'
                value={unit_number}
                onChange={onChange}
              />
            </h4>
          )}
          <h4>
            Cost NGN:
            <input
              type='number'
              name='buying_price'
              value={costBuying}
              disabled
              onChange={(e) => setBuyingPrice(e.target.value)}
            />
          </h4>
          <h4>
            Return NGN:
            <input
              type='number'
              name='return_cost'
              value={costReturn}
              disabled
              onChange={(e) => setReturnCost(e.target.value)}
            />
          </h4>
          <h4>
            Available Units:
            <input
              type='number'
              name='available_unit'
              value={unitAvailable}
              disabled
              onChange={(e) => setAvailableUnit(e.target.value)}
            />
          </h4>
          {isAuthenticated ? (
            commodityItem.unit_number !== '0' && (
              <Button onClick={addToCart}>Add To Cart</Button>
            )
          ) : (
            <Link to='/register'>
              <Button>Sign Up To Buy</Button>
            </Link>
          )}
        </CheckOut>
      </CheckOutContainer>
      <div>
        <h2>{commodityItem.product_name}</h2>
        <h4 className='w-20'>{commodityItem.description}</h4>
      </div>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { addCart, removeUnit, setAlert })(
  CommodityDetail
);
