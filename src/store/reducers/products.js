import { handleActions } from 'redux-actions';
import * as productsActions from '../actions/products';

const initState = {
    products: [],
    loading: false,
    error: null
};

export const Products = handleActions(
    {
        [productsActions.getProducts]: (state, action) => {
            return {
                ...state,
                loading: true,
            }
        },
        [productsActions.getProductsSuccess]: (state, action) => {
            return {
                ...state,
                loading: false,
                products: action.payload,
            }
        },
        [productsActions.getProductsError]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
    },
    initState
);