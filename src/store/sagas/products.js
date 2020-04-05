import { call, takeEvery, put } from 'redux-saga/effects';
import * as productsActions from '../actions/products';

import {
    getProducts,
} from '../../api';

function* getProductsSaga(action) {
    try {
        const response = yield call(getProducts);
        yield put(productsActions.getProductsSuccess(response));
    } catch (e) {
        yield put(productsActions.getProductsError(e));
    }
}

export function* productsSagas() {
    yield takeEvery(
        productsActions.getProducts.toString(),
        getProductsSaga
    )
}