import { combineReducers } from 'redux';
import productsReducer from './products';
import productReducer from './product';

export default combineReducers({
  products: productsReducer,
  product: productReducer
})