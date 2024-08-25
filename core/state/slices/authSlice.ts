import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthState} from '@/core/types/state';

const initialState: IAuthState = {
  username: '',
  password: '',
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth_setUsername: (state: IAuthState, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    auth_setPassword: (state: IAuthState, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    auth_setUser: (state: IAuthState, action: PayloadAction<Object>) => {
      state.user = action.payload;
    },
  },
  selectors: {
    authUsernameSelector: state => state.username,
    authPasswordSelector: state => state.password,
    authUserSelector: state => state.user,
  },
});

export const {auth_setUsername, auth_setPassword, auth_setUser} =
  authSlice.actions;
export const {authUsernameSelector, authPasswordSelector, authUserSelector} =
  authSlice.selectors;

export default authSlice.reducer;
