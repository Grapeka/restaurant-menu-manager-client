import { createSlice } from '@reduxjs/toolkit';
import { IAuth } from '../types/auth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
  },
  reducers: {
    setToken: (state: IAuth, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
