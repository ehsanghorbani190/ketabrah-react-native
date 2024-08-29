import {configureStore} from '@reduxjs/toolkit';
import auth from '@/core/state/slices/authSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@/core/state/sagas/rootSaga';

export const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {auth},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat([sagaMiddleware]),
});
sagaMiddleware.run(rootSaga);
