import { createActions } from 'redux-actions';

export const {
    getProducts,
    getProductsSuccess,
    getProductsError,
} = createActions(
    'GET_PRODUCTS',
    'GET_PRODUCTS_SUCCESS',
    'GET_PRODUCTS_ERROR',
);