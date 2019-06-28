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
      window.sessionStorage.setItem('ADMIN/adminToken', data.token);
      yield put(SessionActions.loginSuccess(user, data.token));
    }
  } catch (e) {
    yield put(SessionActions.loginFailure('Permissão negada'));
  }
}

export function* fetchloginStorage() {
  if (window.sessionStorage.getItem('ADMIN/adminToken')) {
    const token = window.sessionStorage.getItem('ADMIN/adminToken');
    try {
      const { data: user } = yield call(Api.get, '/session', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      if (user.role !== 'admin') {
        yield put(SessionActions.loginFailure('Permissão negada'));
      } else {
        yield put(SessionActions.loginSuccess(user, token));
      }
    } catch (e) {
      yield put(SessionActions.loginFailure('Permissão negada'));
    }
  } else {
    yield put(SessionActions.loginFailure(false));
  }
}
