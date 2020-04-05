import { fork } from 'redux-saga/effects';

import { productsSagas} from './products';

export default function* () {
    yield fork(productsSagas);
}