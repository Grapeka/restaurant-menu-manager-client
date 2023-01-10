import { createSlice } from '@reduxjs/toolkit';
import { IMerchant } from '../types/merchant';

export const merchantSlice = createSlice({
  name: 'merchant',
  initialState: {
    _id: '',
    name: '',
    email: '',
    password: '',
    facebook: '',
    instagram: '',
  },
  reducers: {
    setMerchant: (state: IMerchant, action) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.facebook = action.payload.facebook;
      state.instagram = action.payload.instagram;
    },
  },
});

export const { setMerchant } = merchantSlice.actions;
export default merchantSlice.reducer;
