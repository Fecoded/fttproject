import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commodity from '../commodity/commodity.reducers';
import admin from '../admin/admin.reducers';
import user from '../user/user.reducer';
import alert from '../alert/alert.reducer';
import profile from '../profile/profile.reducer';
import cart from '../cart/cart.reducer';
import wallet from '../wallet/wallet.reducer';
import stall from '../stall/stall.reducer';
import investor from '../investor/investor.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['commodity', 'cart', 'investor'],
};

const rootReducer = combineReducers({
  alert,
  admin,
  user,
  profile,
  commodity,
  cart,
  wallet,
  stall,
  investor,
});

export default persistReducer(persistConfig, rootReducer);
