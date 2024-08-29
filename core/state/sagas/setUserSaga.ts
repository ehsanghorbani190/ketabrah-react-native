import {PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {takeLatest} from '@redux-saga/core/effects';

async function setUser(action: PayloadAction<Object>) {
  //TODO wait till the item is set on storage,then move to the next page
  const current_user = await AsyncStorage.getItem('user');
  const user_string = JSON.stringify(action.payload);
  if (user_string !== current_user)
    await AsyncStorage.setItem('user', JSON.stringify(action.payload));
}
export default function* setUserSaga(action) {
  yield takeLatest('auth/auth_setUsername', setUser);
}
