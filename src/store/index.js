import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categories from './categories';
import thunk from 'redux-thunk';
// import thunk from '../thunk/thunk'
import products from './products';
import cart from './cart';


const rootReducer = combineReducers({categories, products, cart});

const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();