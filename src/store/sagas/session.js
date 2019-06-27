import { call, put } from 'redux-saga/effects';
import { Creators as SessionActions } from '../ducks/session';
import Api from '../../services/api';

export function* loginRequest({ payload: { email, password } }) {
  try {
    const { data } = yield call(Api.post, '/session', {
      email,
      password,
    });
    const { data: user } = yield call(Api.get, '/session', {
      headers: {
        Authorization: `bearer ${data.token}`,
      },
    });
    if (user.role !== 'admin') {
      yield put(SessionActions.loginFailure('Permissão negada'));
    } else {
      yield put(SessionActions.loginSuccess(user, data.token));
    }
  } catch (e) {
    yield put(SessionActions.loginFailure('Permissão negada'));
  }
}
