import { all, takeLatest } from 'redux-saga/effects';
import { loginRequest, fetchloginStorage } from './session';
import { fetchOrdersRequest } from './order';
import { Types as SesionTypes } from '../ducks/session';
import { Types as OrderTypes } from '../ducks/order';

export default function* rootSaga() {
  yield all([
    takeLatest(SesionTypes.LOGIN_REQUEST, loginRequest),
    takeLatest(SesionTypes.FETCH_LOGIN_STORAGE, fetchloginStorage),
    takeLatest(OrderTypes.FETCH_ORDERS_REQUEST, fetchOrdersRequest),
  ]);
}
