import { call, put, select } from 'redux-saga/effects';
import Api from '../../services/api';
import { Creators as OrdersActions } from '../ducks/order';

export function* fetchOrdersRequest() {
  const { adminToken } = yield select(state => state.session);
  try {
    const { data } = yield call(Api.get, '/order', {
      headers: {
        Authorization: `bearer ${adminToken}`,
      },
    });
    yield put(OrdersActions.fetchOrdersSuccess(data));
  } catch (e) {
    yield put(OrdersActions.fetchOrdersSuccess('Houve um erro'));
  }
}
