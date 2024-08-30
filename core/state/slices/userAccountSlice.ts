import {IUserAccountState} from '@/core/types/state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: IUserAccountState = {
  logoutModalVisibility: false,
};

export const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    setLogoutModalVisibility: (
      state: IUserAccountState,
      action: PayloadAction<boolean>
    ) => {
      state.logoutModalVisibility = action.payload;
    },
  },
  selectors: {
    logoutModalVisibilitySelector: state => state.logoutModalVisibility,
  },
});

export const {logoutModalVisibilitySelector} = userAccountSlice.selectors;
export const {setLogoutModalVisibility} = userAccountSlice.actions;
export default userAccountSlice.reducer;
