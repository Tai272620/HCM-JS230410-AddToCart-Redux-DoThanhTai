import { createStore, combineReducers } from 'redux';
import addToCartReducer from './productReducer';


const rootReducer = combineReducers({
    store : addToCartReducer,
})

export const store = createStore(rootReducer)