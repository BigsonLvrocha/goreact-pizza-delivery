import { all, takeLatest } from 'redux-saga/effects';
import { loginRequest } from './session';
import { Types as SesionTypes } from '../ducks/session';

export default function* rootSaga() {
  yield all([takeLatest(SesionTypes.LOGIN_REQUEST, loginRequest)]);
}
