import {configureStore} from '@reduxjs/toolkit';
import auth from '@/core/state/slices/authSlice';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {auth},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat([sagaMiddleware]),
});
