import {spawn} from '@redux-saga/core/effects';
import setUserSaga from '@/core/state/sagas/setUserSaga';

export default function* rootSaga() {
  yield spawn(setUserSaga);
}
